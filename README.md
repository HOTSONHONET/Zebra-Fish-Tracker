# ShatZ

## Overview 📃

<!-- TOC -->
- [About ℹ](#about)
- [Installation guide 🦮](#installatin-guide)
- [How to use it 🤔?](#how-to-use-it)
- [User Flow diagram 👨🏼‍💻](#user-flow-diagram)
- [Application architecture 🚜](#application-architecture)
- [Sample Images 📷](#sample-images)


<!-- /TOC -->

<h2 id="about">About ℹ</h2>

<p> <strong>ShatZ</strong> is a software for tracking zebra fish. It is based on YOLO which is a state-of-the-art, real-time object detection algorithm. The user can simply drag and drop a video file in the upload box. The software takes in the video input, processes it, identifies the zebrafish in each frame, gives each of them a unique ID, and stores their coordinates. The coordinates are then used to generate a list of parameters relevant to the behavior of Zebrafish. It also generates a 3-D as well as 2-D track-plot for the movement of the fish. Overall, it gives you a dashboard to efficiently track zebrafish behavior</p>
            

<h2 id="installatin-guide">Installation guide 🦮</h2>

- There are 2 units of this application; Frontend and Backend. 
- The *Frontend* is a [React](https://reactjs.org) application which requires the installation of the all packages mentioned in the package.json
- The *Backend* is a [Flask](https://flask.palletsprojects.com/en/2.2.x/quickstart/) server which requires the WSL environment, docker and celery service along with all packages mentioned in the requirements.txt file.
- Follow the below steps to run this application on your system:
  - Make sure you have [git](https://git-scm.com/downloads) installed on your system. If you are a windows user, you need to need install [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) in your system, because the application uses [Celery v4+](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) which has support for Linux environment only
  - Once you done with all above requirements, you need to install [docker](https://www.docker.com) in your WSL enovironment. Docker will help in setting up [MongoDB](https://www.mongodb.com/try/download/community) database in your system 
  - Clone the repository using the below command </br> `git clone https://github.com/HOTSONHONET/Zebra-Fish-Tracker.git`
  -  



<h2 id="how-to-use-it">How to use it 🤔?</h2>
<h2 id="user-flow-diagram">User Flow diagram 👨🏼‍💻</h2>
<h2 id="application-architecture">Application architecture 🚜</h2>
<h2 id="sample-images">Sample Images 📷</h2>
