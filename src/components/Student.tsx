import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Info {
    apellidos: string;
    nombres: string;
    paralelo: number;

}

export default function Student(info: Info) {
    return (
        <>
            <Typography component="p" variant="h4">
                {info.apellidos} {info.nombres}
                {/* PENDIENTE: Renderice los props apellidos y nombres */}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>
                
                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo # {info.paralelo}

            </Typography>
        </>
    )
}
