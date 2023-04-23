import React from 'react'
import {
    Box,
    Grid,
    Typography,
} from "@mui/material"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/image/sparklewpthemes-logo.png"
import Search from "./search"

const searchItem = [];
export default function index() {
    return (
        <>
            <Box
                sx={{
                    display: { xs: 'none', md: "block", lg: 'block' },
                    backgroundColor: "#ffffff",
                    padding: "1rem"

                }}
            >
                <Grid container
                    style={{
                        boxShadow: "2px 2px 2px 2px #eaeffb",
                        height: "12vh",
                        paddingTop: "1rem"
                    }}>
                    <Grid item lg={6} xs={6} md={6}
                        style={{
                            display: "flex",
                            justifyContent: "start"
                        }}
                    >
                        <NavLink
                            to="/"
                            style={{
                                backgroundColor: "transparent",
                                textDecoration: "none",
                                textAlign: "center",
                                color: "black"
                            }}
                        >
                            <Typography
                                style={{
                                    fontSize: "1.8rem",
                                    fontFamily: "sans-serif",
                                    fontWeight: "300",

                                }}>
                                Sparkle Theme
                            </Typography>
                        </NavLink>
                    </Grid>
                    <Grid item lg={6} xs={6} md={6}
                        style={{
                            display: "flex",
                            justifyContent: "end"
                        }}
                    >
                        <NavLink
                            to="/"
                            style={{
                                backgroundColor: "transparent",
                            }}
                        >
                            <img
                                src={Logo}
                                alt="logo"
                                width="400px"
                            />
                        </NavLink>
                    </Grid>
                </Grid>
            </Box>
            <Grid item lg={12} xs={12} md={12}
                style={{
                    height: "20vh",
                    fontFamily: "sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#686465",
                    paddingTop: "4rem"
                }}
            >
                Themes
            </Grid>

            <Grid item lg={12} xs={12} md={12}>
                <Search searchItem={searchItem}/>
            </Grid>
        </>
    )
}
