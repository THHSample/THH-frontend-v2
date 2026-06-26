import type AnimalResponse from './api/salesforce'
import { TextField, Stack } from "@mui/material";
import { useState } from "react";





export type AnimalDetailsProp = {
  animal: AnimalResponse
};

function AnimalInformation(animalDetails: AnimalDetailsProp) {
    const [notes, setNotes] = useState<string | null>(null);
    const onNotesChanged = (notes: string) => {
        setNotes(notes);
    }
    return(
        <Stack spacing={2}>
            <TextField
                key={animalDetails.animal.name}
                label= "Name"
                value={animalDetails.animal.name}
                size="small"
                disabled
            />
            <TextField
                key={animalDetails.animal.collarType}
                label= "CollarType"
                value={animalDetails.animal.collarType}
                size="small"
                disabled
            />
            <TextField
                key={animalDetails.animal.diet}
                label= "Food"
                value={animalDetails.animal.diet}
                size="small"
                disabled
            />
            <TextField
                key={animalDetails.animal.notes}
                label= "Notes"
                value={notes ?? animalDetails.animal.notes}
                size="small"
                onChange = {(notes) => onNotesChanged(notes.target.value)}
            />
        </Stack>
    )

}

export default AnimalInformation;