import LoginCard from "../components/LoginCard";
import { Grid, Box, Container } from "@mui/material";
import environment from "../images/environment.png";
import saveThePlanet from "../images/save-the-planet.png";
import PageContainer from "../components/PageContainer";

const Login = () => {
    return (
        <>
            {/* <PageContainer> */}
            <div className="flex items-center h-[calc(100vh-56px)] sm:h-screen md:h-[calc(100vh-64px)] bg-sky-200">
                <Grid
                    container
                    spacing={4}
                    // className="h-100 flex align-center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className="flex justify-center"
                    >
                        <Box
                            component="img"
                            alt="River Environment Image"
                            title="River Environment Image"
                            src={saveThePlanet}
                            className="h-32 sm:h-full"
                        ></Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} alignSelf="center">
                        <LoginCard />
                    </Grid>
                </Grid>
            </div>
            {/* </PageContainer> */}
        </>
    );
};

export default Login;
