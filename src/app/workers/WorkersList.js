import { useContext, useState } from "react";
import { AppContext} from "../../contexts/Context";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SettingsIcon from "@mui/icons-material/Settings";
import ExtensionIcon from "@mui/icons-material/Extension";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import {Actions} from "../../contexts/Actions";

const WorkersList = () => {
    const data = Actions();
    const {
        workers,
        workerLength,
    } = useContext(AppContext);

    return !workerLength ? (
        <p>{workerLength === null ? "Loading..." : "Please insert some users."}</p>
    ) : (
        <Grid container spacing={4}>
            {workers.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 5,
                                        padding: 1.5,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="avatar"

                                        sx={{
                                            height: '100px',
                                            width: '100px',
                                            borderRadius: 50,
                                            border: 2,
                                            borderColor: 'other.border',
                                            marginTop: 2,
                                            alignSelf: 'center'
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                        }}
                                    >
                                        <Typography gutterBottom variant="h6" component="h2" align={"center"} m={-0.5}>
                                            user_name
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle2" component="h3" align={"center"}
                                                    marginBottom={2}>
                                            UI/UX Дизайнер
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <EqualizerIcon
                                                sx={{
                                                    fontSize: "15px",
                                                    marginRight: 1
                                                }}
                                            />
                                            <Typography variant="subtitle2">
                                                Junior
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 0.5}}>
                                            <SettingsIcon sx={{fontSize: '15px', marginRight: 1}}
                                            />
                                            <Typography variant="subtitle2">
                                                Hackathon 2021
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: 'flex'}}>
                                            <ExtensionIcon
                                                sx={{
                                                    fontSize: '15px',
                                                    marginRight: 1
                                                }}
                                            />
                                            <Box className="tags" sx={{display: 'flex', flexWrap: 'wrap'}}>
                                                <Typography className="tag" fontSize='14px' m={0.2}>
                                                    HTML
                                                </Typography>
                                                <Typography className="tag" fontSize='14px' m={0.2}>
                                                    CSS
                                                </Typography>
                                                <Typography className="tag" fontSize='14px' m={0.2}>
                                                    Figma
                                                </Typography>
                                                <Typography className="tag" fontSize='14px' m={0.2}>
                                                    Sketch
                                                </Typography>
                                                <Typography className="tag" fontSize='14px' m={0.2}>
                                                    AdobeInDesign
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{alignSelf: "center"}}>
                                        <Button href="/app/worker" color="primary" size="small"
                                                endIcon={<ArrowForwardIcon/>}>Подробнее</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                ))}
        </Grid>
        );
};

export default WorkersList;
