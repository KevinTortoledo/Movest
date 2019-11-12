import React, { Component } from 'react'
import {Grid,GridColumn,GridRow,FormInput, Form, FormGroup, Header, FormSelect} from 'semantic-ui-react'

export class Request extends Component {
    render() {
        const options = [
            { key: 's', text: 'Soltero', value: 'Soltero' },
            { key: 'c', text: 'Casado', value: 'Casado' },
            { key: 'd', text: 'Divorciado', value: 'Divorciado' },
          ]
        const genders = [
            { key: 'm', text: 'Masculino', value: 'Masculino' },
            { key: 'f', text: 'Femenino', value: 'Femenino' }
         ]
        return (
            <Grid>
                <GridRow>
                    <GridColumn width="16">
                        <Header>
                            <div style={{background: "gray"}}>
                                <h1>Movest</h1> 
                            </div>
                        </Header>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width="2"/>
                    <GridColumn width="12">
                        <GridRow>
                            <Form>
                                <FormGroup width="equal">
                                    <h1>Datos personales</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Nombre(s)" width="6"/>
                                    <FormInput fluid label="Apellido Paterno" width="6"/>
                                    <FormInput fluid label="Apellido Materno" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Fecha de nacimiento" placeholder="dd/mm/aaaa" width="6"/>
                                    <FormSelect fluid label="Estado civil" width="6" options={options}/>
                                    <FormSelect fluid label="Genero" width="6" options={genders}/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="CURP" placeholder="" width="6"/>
                                    <FormInput fluid label="Corre electronico" placeholder="example@gmail.com" width="6"/>
                                    <FormInput fluid label="Telefono" placeholder="6671428064" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Calle" placeholder="" width="6"/>
                                    <FormInput fluid label="No. Interior" placeholder="" width="6"/>
                                    <FormInput fluid label="No. Exterior" placeholder="" width="6"/>
                                    <FormInput fluid label="Codigo postal" placeholder="" width="6"/>
                                    
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Estado" placeholder="" width="6"/>
                                    <FormInput fluid label="Ciudad" placeholder="" width="6"/>
                                    <FormInput fluid label="Municipio o delegacion" placeholder="" width="6"/>
                                    <FormInput fluid label="Colonia" placeholder="" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Datos academicos</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Carrera" placeholder="" width="6"/>
                                    <FormInput fluid label="Plan de estudios" placeholder="" width="6"/>
                                    <FormInput fluid label="Numero de control" placeholder="" width="6"/>
                                    <FormInput fluid label="Semestre" placeholder="" width="6"/>
                                    <FormInput fluid label="Promedio general" placeholder="" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Idiomas" placeholder="" width="6"/>
                                    <FormInput fluid label="% de dominio" placeholder="" width="6"/>
                                    <FormInput fluid label="Documentos de aval" placeholder="" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Institucion de educacion superior de interes</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Nombre de la institucion" placeholder="" width="6"/>
                                    <FormInput fluid label="Pais" placeholder="Mexico" width="6"/>
                                    <FormInput fluid label="Carrera" placeholder="" width="6"/>
                                    <FormInput fluid label="Nombre del contacto" placeholder="" width="6"/>
                                    <FormInput fluid label="Correo electronico del contacto" placeholder="" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <h1>Relacion de asignaturas en movilidad</h1>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                <FormGroup width="equal">
                                    <FormInput fluid label="Asignatura de procedencia" placeholder="" width="11"/>
                                    <FormInput fluid label="Clave" placeholder="" width="8"/>
                                    <FormInput fluid label="Creditos" placeholder="" width="6"/>
                                    <FormInput fluid label="Asignatura destino" placeholder="" width="10"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas teoricas" placeholder="Destino" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Origen" width="6"/>
                                    <FormInput fluid label="Horas practicas" placeholder="Destino" width="6"/>
                                </FormGroup>
                                
                            </Form>
                        </GridRow>
                    </GridColumn>
                    <GridColumn width="2" />
                </GridRow>
            </Grid>
        )
    }
}

export default Request
