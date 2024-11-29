import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from "@mui/material/Card";
import Input from '@mui/material/Input';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
 <div style={{ minHeight: "100vh", justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Card
                sx={{
                    maxWidth: '448px',
                    width: "100%",
                    backgroundColor: "#242424",
                    color: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <CardHeader
                    title={
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                background: "linear-gradient(to right, #FFC0CB, #DDA0DD)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            RestaurApp
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography variant="h4" sx={{ color: 'while', fontWeight: 'bold' }}>
                        Bienvenido
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0B0B0", marginBottom: "16px" }}>
                        Ingrese sus credenciales para acceder a su cuenta
                    </Typography>
                    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                            <label htmlFor="email" style={{ color: "#e5e7eb" }}>
                                Usuario
                            </label>
                            <Input
                                id="email"
                                placeholder="restaurant@example.com"
                                type="email"
                                sx={{
                                    width: "100%",
                                    color: "white",
                                    padding: "8px",
                                    borderRadius: "4px",
                                    marginTop: "4px",
                                    paddingRight: "40px",
                                    backgroundColor: "#2A2A2A",
                                    "&:before": {
                                        borderBottom: "2px solid white",
                                    },
                                    "&:hover:not(.Mui-disabled):before": {
                                        borderBottom: "2px solid #DDA0DD",
                                    },
                                    "&.Mui-focused:after": {
                                        borderBottom: "2px solid purple",
                                    },
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={{ color: "#e5e7eb" }}>
                                Contraseña
                            </label>
                            <div style={{ position: "relative" }}>
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingrese su contraseña"
                                    sx={{
                                        width: "100%",
                                        color: "white",
                                        padding: "8px",
                                        borderRadius: "4px",
                                        marginTop: "4px",
                                        paddingRight: "40px",
                                        backgroundColor: "#2A2A2A",
                                        "&:before": {
                                            borderBottom: "2px solid white",
                                        },
                                        "&:hover:not(.Mui-disabled):before": {
                                            borderBottom: "2px solid #DDA0DD",
                                        },
                                        "&.Mui-focused:after": {
                                            borderBottom: "2px solid purple",
                                        },
                                    }}
                                    required
                                />
                                <Button
                                    onClick={() => setShowPassword(!showPassword)}
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "8px",
                                        transform: "translateY(-50%)",
                                        minWidth: "auto",
                                        padding: "4px",
                                        color: "#B0B0B0",
                                    }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </Button>
                            </div>
                        </div>
                        <Button
                            type="submit"
                            sx={{
                                width: "100%",
                                background: "linear-gradient(to right, #FFC0CB, #DDA0DD)",
                                color: "#1C1C1C",
                                fontWeight: "bold",
                                padding: "10px",
                                "&:hover": {
                                    background: "linear-gradient(to right, #FFB6C1, #BA55D3)",
                                },
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </form>
                    <div style={{ textAlign: "center", marginTop: "8px" }}>
                      
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
