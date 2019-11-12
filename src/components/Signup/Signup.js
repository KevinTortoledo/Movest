import React, { Component } from 'react'
import { Grid, GridColumn, FormField, FormInput, GridRow, Button, Form, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Signup extends Component {
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
                        <Form.Group widths='equal'>
                        <Form.Input fluid label='Usuario' placeholder='Numero de Control' />
                        <Form.Input fluid label='Constraseña' placeholder='Contraseña' />
                        <Form.Input fluid label='Primer nombre' placeholder='Primer nombre' />
                        <Form.Input fluid label='Apellido paterno' placeholder='Apellido paterno' />
                        <Form.Input fluid label='Apellido materno' placeholder='Apellido materno' />
                        <Form.Select
                            fluid
                            label='Genero'
                            options={'Masculino','Femenino'}
                            placeholder='Genero'
                        />
                        <Button primary>Aceptar</Button>
                        <Button secondary>Cancelar</Button>
                        <Link to='/Login'>Regresar</Link>
                        </Form.Group>
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
