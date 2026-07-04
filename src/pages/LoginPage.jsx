import { Box, Typography } from "@mui/material"
import { LoginTabs } from "../components/login/LoginTabs"

export const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        borderRadius: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Table App
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Система управления документами
        </Typography>
      </Box>

      <Box
        sx={{
          background: '#fff',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          padding: '8px 32px 32px 32px',
          width: '100%',
          maxWidth: 520,
        }}
      >
        <LoginTabs />
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ marginTop: 3 }}>
        © 2026 Table App. Все права защищены.
      </Typography>
    </Box>
  )
}