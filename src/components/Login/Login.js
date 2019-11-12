import React, { Component } from 'react'
import { Grid, GridColumn, FormField, FormInput, GridRow, Button, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
export default class Login extends Component {

    render() {
        return (
            <GridRow>
                <GridRow>
                    <Header >
                        <div style={{background: "gray"}}>
                            <h1>Movest</h1> 
                        </div>
                    </Header>
                </GridRow>
                <GridRow>
                <Grid columns={3} relaxed='very'>
                <GridColumn>
                </GridColumn>
                <GridColumn>
                    <FormField>
                        <GridRow>
                            <FormInput fluid label='Usuario' placeholder='Usuario'/>
                            <FormInput fluid label='Contraseña' placeholder='Contraseña'/>
                        </GridRow>
                        <GridRow>
                            <Button primary>Ingresar</Button>
                            <Button secondary>Cancelar</Button>
                            <Link to='/signup'>¿No estas registrado?</Link>
                        </GridRow>
                    </FormField>
                </GridColumn>
                <GridColumn>
                </GridColumn>
            </Grid>  
                </GridRow>
            </GridRow>  
        )
    }
}
