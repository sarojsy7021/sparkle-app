import { useState, React } from 'react';
import { Box, Grid, Typography, Button, TextField, Divider } from "@mui/material"
import Home from "../../pages/Home/Home"
import data from '../../pages/Home/data';

const menu = [
    {
        title: "All",
    },
    {
        title: "Blog",
    },
    {
        title: "Business"
    },
    {
        title: "eCommerce"
    },
    {
        title: "News"
    },
    {
        title: "Education"
    },
    {
        title: "Other"
    }
];

export default function BasicPopover() {
    const [search, setSearch] = useState("");
    // search handler
    const searchItem = data.filter((item) => {
        if (!search) {
            return true; // if search is empty, return all items
        }
        return item.title.toLowerCase().includes(search.toLowerCase());
    });
    // handle event for button

    const setSelectedCategory = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Box
                style={{
                    boxShadow: "2px 2px 2px 2px #eaeffb",
                    height: "20vh"
                }}
            >
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <Box
                            style={{
                                backgroundColor: "black",
                                height: "10vh",
                                margin: "1rem 4rem 0rem 4rem",
                                borderRadius: "1rem",
                                opacity: "0.8",
                                padding: "1rem"

                            }}
                        >
                            <Typography
                                style={{
                                    color: "white",
                                    fontSize: "1.2rem",
                                    fontWeight: "600"
                                }}
                            >
                                Search Here...
                            </Typography>
                            <Box
                                style={{
                                    backgroundColor: "white",
                                    padding: ".5rem",
                                    borderRadius: ".3rem"
                                }}>
                                <Grid container spacing={2} >
                                    <Grid item lg={12} xs={12} md={12} onChange={event => setSearch(event.target.value)}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Search for anything..."
                                            variant="outlined"
                                            fullWidth
                                            style={{
                                                color: "white"
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className="Box">
                <Divider color="#d8c5c3" />
                <Grid container style={{
                    padding: ".6rem",
                    paddingTop: "2rem",
                    marginLeft: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center"
                }}>
                    {menu.map((menu, index) => (
                        <Grid item lg={1} xs={1} md={1} key={index}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 2,
                                flexWrap: 'wrap',
                                marginBottom: '1rem'
                            }}
                                className="bg">
                                <Button variant="soft"
                                    key={index}
                                    onClick={() => handleCategorySelect(menu.title)}
                                    style={{
                                        fontSize: "1.2rem",
                                        color: "#2b2d89",
                                        fontWeight: "600",
                                        letterSpacing: "1px"
                                    }}>
                                    {menu.title}
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Divider color="#d8c5c3" />
            </Box>
            <Grid item lg={12} xs={12} md={12}>
                <Home searchItem={searchItem} />
            </Grid>
        </>
    );
}
