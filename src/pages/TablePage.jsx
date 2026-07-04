import { Box, Typography, Button } from "@mui/material"
import { TableBlock } from "../components/table/TableBlock"
import AddIcon from "@mui/icons-material/Add"

export const TablePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" color="primary">
            Документы
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Управление документами и подписями
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<AddIcon />}>
          Добавить запись
        </Button>
      </Box>

      <Box
        sx={{
          background: '#fff',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          padding: '16px 34px',
        }}
      >
        <TableBlock />
      </Box>

    </Box>
  )
}