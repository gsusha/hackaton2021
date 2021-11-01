import { useEffect, useState } from "react";

export const Actions = () => {
    let [workers, setWorkers] = useState([]);

    let [workerLength, setWorkerLength] = useState(null);

    useEffect(() => {
        fetch('http://ruzairhx.beget.tech/php/data/all_worker.php')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    setWorkers(data.workers);
                    setWorkerLength(true);
                } else {
                    setWorkerLength(0);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const insertWorker = (newWorker) => {
        fetch("http://ruzairhx.beget.tech/php/data/all_worker.php", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(newWorker),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.id) {
                    setWorkers([
                        {
                            id: data.id,
                            ...newWorker,
                        },
                        ...workers,
                    ]);
                    setWorkerLength(true);
                } else {
                    alert(data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const editMode = (id) => {
        workers = workers.map((worker) => {
            if (worker.id === id) {
                worker.isEditing = true;
                return worker;
            }
            worker.isEditing = false;
            return worker;
        });
        setWorkers(workers);
    };

    // Cance the edit mode.
    const cancelEdit = (id) => {
        workers = workers.map((worker) => {
            if (worker.id === id) {
                worker.isEditing = false;
                return worker;
            }
            return worker;
        });
        setWorkers(workers);
    };

    const updateWorker = (workerData) => {
        fetch("http://ruzairhx.beget.tech/php/data/all_worker.php", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(workerData),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    workers = workers.map((worker) => {
                        if (worker.id === workerData.id) {
                            worker.isEditing = false;
                            worker.worker = workerData.worker_name;
                            worker.worker_email = workerData.worker_email;
                            return worker;
                        }
                        return worker;
                    });
                    setWorkers(workers);
                } else {
                    alert(data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteWorker = (theID) => {
        let workerDeleted = workers.filter((worker) => {
            return worker.id !== theID;
        });
        fetch("http://ruzairhx.beget.tech/php/data/all_worker.php", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ id: theID }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    setWorkers(workerDeleted);
                    if (workers.length === 1) {
                        setWorkerLength(0);
                    }
                } else {
                    alert(data.msg);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        workers,
        editMode,
        cancelEdit,
        updateWorker,
        insertWorker,
        deleteWorker,
        workerLength,
    };
};