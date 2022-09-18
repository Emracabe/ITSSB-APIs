const model = require("./model");

exports.getPMTasksList = async (req, res) => {
    try {
        const sqlQuery =
            `SELECT pmt.id, a.AssetName, a.AssetSN, t.Name "TaskName", pmsm.Name AS "ScheduleType", convert(varchar, pmt.ScheduleDate, 111) AS "ScheduleDate", pmt.ScheduleKilometer, pmt.TaskDone FROM PMTasks pmt LEFT JOIN assets a ON pmt.AssetID = a.ID LEFT JOIN tasks t ON pmt.TaskID = t.ID LEFT JOIN PMScheduleTypes pmst ON pmst.ID = pmt.PMScheduleTypeID LEFT JOIN PMScheduleModels pmsm ON pmst.ID = pmsm.ID`;

        await model
            .Query(sqlQuery)
            .then((result) => {
                console.log("PMTasks fetched successfully");
                res.status(200).json(result[0]);
            })
            .catch(error => {
                console.error("PMTasks not fetched successfully");
                res.status(401).json(error);
            });
    } catch (error) {
        console.error(error);
    }
};

exports.getPMTasksListByQuery = async (req, res) => {
    let { activedate, assetname, taskname } = req.query;
    try {
        let sqlQuery = ""
        if (assetname == undefined && taskname == undefined) {
            sqlQuery = `SELECT pmt.id, a.AssetName, a.AssetSN, t.Name "TaskName", pmsm.Name AS "ScheduleType", convert(varchar, pmt.ScheduleDate, 111) AS "ScheduleDate", pmt.ScheduleKilometer, pmt.TaskDone FROM PMTasks pmt LEFT JOIN assets a ON pmt.AssetID = a.ID LEFT JOIN tasks t ON pmt.TaskID = t.ID LEFT JOIN PMScheduleTypes pmst ON pmst.ID = pmt.PMScheduleTypeID LEFT JOIN PMScheduleModels pmsm ON pmst.ID = pmsm.ID WHERE pmt.ScheduleDate='${activedate}';`;
        } else if (!(assetname == undefined) && !(assetname == undefined)) {
            sqlQuery = `SELECT pmt.id, a.AssetName, a.AssetSN, t.Name "TaskName", pmsm.Name AS "ScheduleType", convert(varchar, pmt.ScheduleDate, 111) AS "ScheduleDate", pmt.ScheduleKilometer, pmt.TaskDone FROM PMTasks pmt LEFT JOIN assets a ON pmt.AssetID = a.ID LEFT JOIN tasks t ON pmt.TaskID = t.ID LEFT JOIN PMScheduleTypes pmst ON pmst.ID = pmt.PMScheduleTypeID LEFT JOIN PMScheduleModels pmsm ON pmst.ID = pmsm.ID WHERE pmt.ScheduleDate='${activedate}' AND a.AssetName='${assetname}' AND t.Name='${taskname}';`;
        }
        else if (assetname == undefined) {
            sqlQuery = `SELECT pmt.id, a.AssetName, a.AssetSN, t.Name "TaskName", pmsm.Name AS "ScheduleType", convert(varchar, pmt.ScheduleDate, 111) AS "ScheduleDate", pmt.ScheduleKilometer, pmt.TaskDone FROM PMTasks pmt LEFT JOIN assets a ON pmt.AssetID = a.ID LEFT JOIN tasks t ON pmt.TaskID = t.ID LEFT JOIN PMScheduleTypes pmst ON pmst.ID = pmt.PMScheduleTypeID LEFT JOIN PMScheduleModels pmsm ON pmst.ID = pmsm.ID WHERE pmt.ScheduleDate='${activedate}' AND a.AssetName='${assetname}';`;
        } else if (taskname == undefined) {
            sqlQuery = `SELECT pmt.id, a.AssetName, a.AssetSN, t.Name "TaskName", pmsm.Name AS "ScheduleType", convert(varchar, pmt.ScheduleDate, 111) AS "ScheduleDate", pmt.ScheduleKilometer, pmt.TaskDone FROM PMTasks pmt LEFT JOIN assets a ON pmt.AssetID = a.ID LEFT JOIN tasks t ON pmt.TaskID = t.ID LEFT JOIN PMScheduleTypes pmst ON pmst.ID = pmt.PMScheduleTypeID LEFT JOIN PMScheduleModels pmsm ON pmst.ID = pmsm.ID WHERE pmt.ScheduleDate='${activedate}' AND t.Name='${taskname}';`;
        }
        console.log(sqlQuery);
        await model
            .Query(sqlQuery)
            .then((result) => {
                console.log("PMTasks fetched successfully");
                res.status(200).json(result[0]);
            })
            .catch(error => {
                console.error("PMTasks not fetched successfully");
                res.status(401).json(error);
            });
    } catch (error) {
        console.error(error);
    }
};

exports.getAssetList = async (req, res) => {
    try {
        const sqlQuery =
            `SELECT id, AssetName AS "Name" FROM assets;`;
        await model
            .Query(sqlQuery)
            .then((result) => {
                console.log("Assets fetched successfully");
                res.status(200).json(result[0]);
            })
            .catch(error => {
                console.error("Assets not fetched successfully");
                res.status(401).json(error);
            });
    } catch (error) {
        console.error(error);
    }
};

exports.getTaskList = async (req, res) => {
    try {
        const sqlQuery =
            `SELECT * FROM tasks;`;
        await model
            .Query(sqlQuery)
            .then((result) => {
                console.log("Tasks fetched successfully");
                res.status(200).json(result[0]);
            })
            .catch(error => {
                console.error("Tasks not fetched successfully");
                res.status(401).json(error);
            });
    } catch (error) {
        console.error(error);
    }
};
