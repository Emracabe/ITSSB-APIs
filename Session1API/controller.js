const model = require("./model");

exports.getAssetList = async (req, res) => {
    try {
        const sqlQuery = `SELECT a.ID, a.AssetSN, a.AssetName, d.Name AS 'Department', l.Name AS 'Location', CONCAT(e.FirstName, ' ', e.LastName) AS 'Employee', ag.Name AS 'AssetGroup', a.Description, a.WarrantyDate FROM assets a LEFT JOIN  DepartmentLocations dl ON dl.ID = a.DepartmentLocationID LEFT JOIN Departments d ON d.ID = dl.DepartmentID LEFT JOIN Locations l ON l.ID = dl.LocationID LEFT JOIN Employees e ON e.ID = a.EmployeeID LEFT JOIN AssetGroups ag ON ag.ID = a.AssetGroupID;`;
        let result = await model
            .Query(sqlQuery)
            .then((result) => res.status(200).json(result)).catch(error => res.status(401).json(error));
    } catch (error) {
        console.error(error);
    }
};

exports.getDepartmentList = async (req, res) => {
    try {
        const sqlQuery = `SELECT * from departments`;
        let result = await model
            .Query(sqlQuery)
            .then((result) => res.status(200).json(result)).catch(error => res.status(401).json(error));
    } catch (error) {
        console.error(error);
    }
}

exports.getAssetGroupList = async (req, res) => {
    try {
        const sqlQuery = `SELECT * from assetgroups`;
        let result = await model
            .Query(sqlQuery)
            .then((result) => res.status(200).json(result)).catch(error => res.status(401).json(error));
    } catch (error) {
        console.error(error);
    }
}
