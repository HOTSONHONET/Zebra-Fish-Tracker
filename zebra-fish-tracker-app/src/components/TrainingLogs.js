import React from 'react'

const trainingLogs = [
    {
        "epoch": 0,
        "train": {
            "box_loss": 0.074337,
            "obj_loss": 0.040156,
            "cls_loss": 0
        },
        "metrics": {
            "precision": 0.4045,
            "recall": 0.86547,
            "mAP_0.5": 0.49223,
            "mAP_0.5:0.95": 0.16562
        },
        "val": {
            "box_loss": 0.045936,
            "obj_loss": 0.017457,
            "cls_loss": 0
        },
        "x": {
            "lr0": 0.0033201,
            "lr1": 0.0033201,
            "lr2": 0.07012
        }
    },
    {
        "epoch": 1,
        "train": {
            "box_loss": 0.051261,
            "obj_loss": 0.022831,
            "cls_loss": 0
        },
        "metrics": {
            "precision": 0.62535,
            "recall": 0.9716,
            "mAP_0.5": 0.71788,
            "mAP_0.5:0.95": 0.38221
        },
        "val": {
            "box_loss": 0.035652,
            "obj_loss": 0.013317,
            "cls_loss": 0
        },
        "x": {
            "lr0": 0.005336,
            "lr1": 0.005336,
            "lr2": 0.038802
        }
    },
    {
        "epoch": 2,
        "train": {
            "box_loss": 0.043198,
            "obj_loss": 0.019883,
            "cls_loss": 0
        },
        "metrics": {
            "precision": 0.95636,
            "recall": 0.95665,
            "mAP_0.5": 0.98553,
            "mAP_0.5:0.95": 0.33354
        },
        "val": {
            "box_loss": 0.032089,
            "obj_loss": 0.011806,
            "cls_loss": 0
        },
        "x": {
            "lr0": 0.006032,
            "lr1": 0.006032,
            "lr2": 0.0061648
        }
    },
    {
        "epoch": 3,
        "train": {
            "box_loss": 0.032764,
            "obj_loss": 0.016869,
            "cls_loss": 0
        },
        "metrics": {
            "precision": 0.9955,
            "recall": 0.99101,
            "mAP_0.5": 0.99488,
            "mAP_0.5:0.95": 0.70142
        },
        "val": {
            "box_loss": 0.02138,
            "obj_loss": 0.0099865,
            "cls_loss": 0
        },
        "x": {
            "lr0": 0.00406,
            "lr1": 0.00406,
            "lr2": 0.00406
        }
    },
    {
        "epoch": 4,
        "train": {
            "box_loss": 0.027882,
            "obj_loss": 0.015771,
            "cls_loss": 0
        },
        "metrics": {
            "precision": 0.99695,
            "recall": 0.98954,
            "mAP_0.5": 0.99472,
            "mAP_0.5:0.95": 0.71549
        },
        "val": {
            "box_loss": 0.019288,
            "obj_loss": 0.0092581,
            "cls_loss": 0
        },
        "x": {
            "lr0": 0.00406,
            "lr1": 0.00406,
            "lr2": 0.00406
        }
    }
]



export default function TrainingLogs() {
    console.log(trainingLogs);
    return (
        <div className="card p-2 text-wrap" style={{ width: "100%" }}>
            <div className="card-title mt-4 mx-4">
                <h3>Training Logs</h3>
            </div>
            <div className="card-body text-center">
                <table className="table table-sm table-bordered table-hover table-secondary vw-10">
                    <thead>
                        <tr>
                            <th rowSpan={2} style={{ verticalAlign: "middle", textAlign: "center" }}>Epoch</th>
                            <th colSpan={3} style={{ verticalAlign: "middle", textAlign: "center" }}>Train</th>
                            <th colSpan={4} style={{ verticalAlign: "middle", textAlign: "center" }}>Metrics</th>
                            <th colSpan={3} style={{ verticalAlign: "middle", textAlign: "center" }}>Validation</th>
                            <th colSpan={3} style={{ verticalAlign: "middle", textAlign: "center" }}>Learning Rate</th>
                        </tr>
                        <tr>
                            <th>box_loss</th>
                            <th>obj_loss</th>
                            <th>cls_loss</th>
                            <th>precision</th>
                            <th>recall</th>
                            <th>mAP_0.5</th>
                            <th>mAP_0.5:0.95</th>
                            <th>box_loss</th>
                            <th>obj_loss</th>
                            <th>cls_loss</th>
                            <th>LR0</th>
                            <th>LR1</th>
                            <th>LR2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainingLogs.map((log, idx) => {
                                return <>
                                    <tr className="table-light">
                                        <th scope="row">{log.epoch + 1}</th>
                                        <td>{log.train.box_loss}</td>
                                        <td>{log.train.obj_loss}</td>
                                        <td>{log.train.cls_loss}</td>
                                        <td>{log.metrics.precision}</td>
                                        <td>{log.metrics.recall}</td>
                                        <td>{log.metrics['mAP_0.5']}</td>
                                        <td>{log.metrics['mAP_0.5:0.95']}</td>
                                        <td>{log.val.box_loss}</td>
                                        <td>{log.val.obj_loss}</td>
                                        <td>{log.val.cls_loss}</td>
                                        <td>{log.x.lr0}</td>
                                        <td>{log.x.lr1}</td>
                                        <td>{log.x.lr2}</td>
                                    </tr>
                                </>
                            })
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}
