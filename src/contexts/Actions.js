import { useEffect, useState } from "react";

export const Actions = () => {
    let [workers, setWorkers] = useState([]);

    //userLength is for showing the Data Loading message.
    let [workerLength, setWorkerLength] = useState(null);

    useEffect(() => {
        fetch("https://j16301712.myjino.ru/php/data/all_workers.php")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    setWorkers(data.users.reverse());
                    setWorkerLength(true);
                } else {
                    setWorkerLength(0);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

}