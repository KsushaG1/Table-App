import { Stack, Button, TableCell, TableRow, TextField } from '@mui/material'

export const TableRows = () => {
  return (
    <>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>12.03.2021</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>ООО «Альфа Групп»</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Договор поставки №1</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Подписан</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Договор</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0011</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>01.06.2022</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Иванов Алексей</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>05.07.2019</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>ЗАО «Бета Технологии»</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Акт выполненных работ №7</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>На согласовании</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Акт</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0034</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>14.02.2020</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Петрова Марина</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>22.11.2018</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>ИП Соколов В.Д.</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Счёт-фактура №204</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Отклонён</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Счёт-фактура</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0058</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>09.09.2019</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Кузнецов Дмитрий</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>30.01.2023</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>ООО «Гамма Логистик»</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Дополнительное соглашение №3</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Подписан</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Доп. соглашение</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0072</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>17.03.2023</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Николаева Ольга</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>14.05.2020</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>АО «Дельта Финанс»</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Приказ об изменении условий №9</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Ожидает подписи</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Приказ</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0091</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>22.07.2021</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Смирнов Виктор</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>08.09.2022</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>ООО «Эпсилон Строй»</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Договор аренды №15</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Архивирован</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Договор</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>EMP-0103</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>30.10.2022</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><span>Фёдорова Анна</span></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}></TableCell>
    </TableRow>
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}><TextField required /></TableCell>
      <TableCell sx={{ padding: '10px 5px 10px 0' }}>
        <Stack direction='row'>
          <Button variant='outlined' color='primary'>CLEAR</Button>
        </Stack>
      </TableCell>
    </TableRow>
    </>
  )
}