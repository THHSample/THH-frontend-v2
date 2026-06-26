
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type AnimalResponse from './api/salesforce'
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from "react";
import {getAnimals} from './api/salesforce'


var animalResponse: AnimalResponse[] = [];


export type AnimalClickProps = {
  onAnimalClick: (animal: AnimalResponse) => void;
};

export interface AnimalTableProps {
    onAnimalClick: (item: AnimalResponse) => void;
}

function getIsWalkedText(isWalked: boolean): string {
    if(isWalked) return "Done";
    else return "Not Done";
}

function ListItemRow({onAnimalClick}: AnimalTableProps) {

    const [loading, setIsLoading] = useState<Boolean>(true);
    
    const renderPage = () => {
     switch(loading) {
        case true:
            return <div>Loading</div>
        case false:
            return  <TableContainer component={Paper}>
                        <Table sx={{ tableLayout: 'fixed', width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Collar Type</TableCell>
                                    <TableCell align="center">Walk1</TableCell>
                                    <TableCell align="center">Walk2</TableCell>
                                    <TableCell align="center">Walk3</TableCell>
                                    <TableCell align="center">Details</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {animalResponse.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{item.name}</TableCell>
                                        <TableCell align="center">{item.collarType}</TableCell>
                                        <TableCell align="center">{getIsWalkedText(item.walk1)}</TableCell>
                                        <TableCell align="center">{getIsWalkedText(item.walk2)}</TableCell>
                                        <TableCell align="center">{getIsWalkedText(item.walk3)}</TableCell>
                                        <TableCell align="center" onClick={() => onAnimalClick(item)}> Click me!</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
        }
    }

    getAnimals().then(response => {
        animalResponse = response;
        setIsLoading(false);
    }).catch(error => console.log("Got an error " + error))

    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            {renderPage()}
        </ThemeProvider>
    );
}

export default ListItemRow;