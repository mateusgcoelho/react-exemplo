import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Lista, Item, Container, Buttons } from "./styles";

import api from "../../services/api";

function Users() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            api.get("/users").then((response) => {
                const usersData = response.data;

                setUsers(usersData);
                setLoading(false);
            });
        } catch (err) {

        }
    }, []);

    function removeItem(id) {
        let arrayUser = []; 
        users.map((user) => {
            if (!(id === user.id)) {
                arrayUser.push(user);
            }
        });

        setUsers(arrayUser);
    }

    return(
        <Container>
            {loading === true ? (
                <h1>Carregando...</h1>
            ) : (
                users.map((user) => (
                    <Lista>
                        <Item>
                            <li>ID</li>
                            <li>{user.id}</li>
                        </Item>
                        <Item>
                            <li>NOME</li>
                            <li>{user.name}</li>
                        </Item>
                        <Item>
                            <li>IDADE</li>
                            <li>{user.age}</li>
                        </Item>

                        <Buttons>
                            <a href="#" onClick={() => removeItem(user.id)}>
                                Deletar
                            </a>

                            <Link key={user.id} to={`/users/${user.id}`}>
                                Ver mais
                            </Link>
                        </Buttons>
                    </Lista>
                ))
            )}

        </Container>
    );
}

export default Users;