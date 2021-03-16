import { useEffect, useState } from "react";

import { useLocation } from "react-router";

import { Container } from "./styles";

import api from "../../services/api";

function ViewUser() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        try {
            api.get(`/users/${id}`).then((response) => {
                setUser(response.data);
                setLoading(false);
            });
        } catch (err) {

        }
    }, []);

    return(
        <Container>
            {loading === true ? (
                <h1>Carregando...</h1>
            ) : (   
                <h2>{user.name}</h2>
            )}

        </Container>
    );
}

export default ViewUser;