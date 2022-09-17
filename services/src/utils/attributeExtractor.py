from collections import Counter
from pprint import pprint


class PARAMS:
    PX_2_M = 0.0002645833
    TOTAL_FRAMES = 0  # Will be set in main function
    FPS = 25
    THRES_FRAME_FREEZING = 20
    WIDTH = 0
    HEIGHT = 0


class GetALLAttributes:
    def __init__(self, data):
        self.data = data
        self.results = {}
        self.baseLine = 64 + (352 - 64)//2  # mid of the tank

    def euclideanDistance(self, x1, y1, x2, y2):
        distance_in_px = ((x1 - x2)**2 + (y1 - y2)**2)**0.5
        distance_in_m = round(float(distance_in_px * PARAMS.PX_2_M), 4)
        return distance_in_m

    def processData(self):
        for fish_id in self.data.keys():
            self.results[fish_id] = {
                "x": [], "y": []
            }

            frame_no = 1
            while frame_no <= PARAMS.TOTAL_FRAMES and len(self.data[fish_id]) > 0:
                cur_frame, centX, centY = self.data[fish_id].pop(0)
                while frame_no <= cur_frame:
                    self.results[fish_id]['x'].append(centX)
                    self.results[fish_id]['y'].append(centY)
                    frame_no += 1

            while frame_no <= PARAMS.TOTAL_FRAMES:
                self.results[fish_id]['x'].append(centX)
                self.results[fish_id]['y'].append(centY)
                frame_no += 1

    def getTotalDistance(self, centriodsX, centriodsY):
        totalCentriods = len(centriodsX)

        distance = 0
        for i in range(1, totalCentriods):
            x1, y1 = centriodsX[i - 1], centriodsY[i - 1]
            x2, y2 = centriodsX[i], centriodsY[i]

            distance += self.euclideanDistance(x1, y1, x2, y2)

        return round(distance, 4)

    def averageSpeed(self, centriodsX, centriodsY):
        totalVectors = len(centriodsX) - 1 if len(centriodsX) > 1 else 1

        distance = 0
        for i in range(1, totalVectors + 1):
            x1, y1 = centriodsX[i - 1], centriodsY[i - 1]
            x2, y2 = centriodsX[i], centriodsY[i]

            distance += self.euclideanDistance(x1, y1, x2, y2)

        return round(distance/totalVectors, 4)

    def maximumSpeed(self, centriodsX, centriodsY):
        totalVectors = len(centriodsX) - 1 if len(centriodsX) > 1 else 1

        maxxSpeed = 0
        for i in range(1, totalVectors + 1):
            x1, y1 = centriodsX[i - 1], centriodsY[i - 1]
            x2, y2 = centriodsX[i], centriodsY[i]

            maxxSpeed = max(maxxSpeed, self.euclideanDistance(x1, y1, x2, y2))

        return maxxSpeed

    def totalStationaryTime(self, centriodsX, centriodsY):
        finder = []
        for centX, centY in list(zip(centriodsX, centriodsY)):
            finder.append(f"{centX}_{centY}")
        counter = Counter(finder)

        freezedFrames = 0
        for _, cnt in counter.items():
            if cnt > 10:
                freezedFrames += cnt
        freezingTime = freezedFrames // PARAMS.FPS
        return round(freezingTime, 4)

    def totalMobileTime(self, freezingTime):
        totalVideoLength = PARAMS.TOTAL_FRAMES//PARAMS.FPS
        mobileTime = totalVideoLength - freezingTime
        return round(mobileTime, 4)

    def noOfFreezingEpisodes(self, centriodsX, centriodsY):
        finder = []
        for centX, centY in list(zip(centriodsX, centriodsY)):
            finder.append(f"{centX}_{centY}")
        counter = Counter(finder)

        numFreezeEpisodes = 0
        for key, cnt in counter.items():
            if cnt > 10:
                numFreezeEpisodes += 1

        return numFreezeEpisodes

    def totalTimeInUpperHalf(self, centriodsY):
        total_frames_in_upper_half = 0
        for centY in centriodsY:
            if centY < self.baseLine:
                total_frames_in_upper_half += 1
        total_time_in_upper_half = total_frames_in_upper_half/PARAMS.FPS
        return round(total_time_in_upper_half, 4)

    def totalTimeInLowerHalf(self, centriodsY):
        total_frames_in_lower_half = 0
        for centY in centriodsY:
            if centY >= self.baseLine:
                total_frames_in_lower_half += 1
        total_time_in_lower_half = total_frames_in_lower_half/PARAMS.FPS
        return round(total_time_in_lower_half, 4)

    def __call__(self):
        self.processData()

        for fish_id in self.results.keys():
            centXs = self.results[fish_id]['x']
            centYs = self.results[fish_id]['y']

            self.results[fish_id]['total_distance'] = self.getTotalDistance(
                centXs, centYs)
            self.results[fish_id]['average_speed'] = self.averageSpeed(
                centXs, centYs)
            self.results[fish_id]['maximum_speed'] = self.maximumSpeed(
                centXs, centYs)
            self.results[fish_id]['total_stationary_time'] = self.totalStationaryTime(
                centXs, centYs)
            self.results[fish_id]['total_mobile_time'] = self.totalMobileTime(
                self.results[fish_id]['total_stationary_time'])
            self.results[fish_id]['no_of_freezing_episodes'] = self.noOfFreezingEpisodes(
                centXs, centYs)
            self.results[fish_id]['total_time_in_upperHalf'] = self.totalTimeInUpperHalf(
                centYs)
            self.results[fish_id]['total_time_in_lowerHalf'] = self.totalTimeInLowerHalf(
                centYs)

        return self.results


def get_attributes(file_path, width, height):
    # Setting up all PARAMS
    PARAMS.WIDTH = width
    PARAMS.HEIGHT = height

    data = {}
    with open(file_path, 'r') as file:
        lines = file.readlines()
        file.close()

    for line in lines:
        frame_no, fish_id, top_leftX, top_leftY, w, h = list(
            map(int, line.strip("\n").split()[:-4]))
        fish_id = f"Fish_{fish_id}"
        centroidX = top_leftX + w//2
        centroidY = top_leftY + h//2

        if fish_id not in data.keys():
            data[fish_id] = []

        data[fish_id].append((frame_no, centroidX, centroidY))

    PARAMS.TOTAL_FRAMES = frame_no

    processed_data = GetALLAttributes(data)()
    return processed_data
