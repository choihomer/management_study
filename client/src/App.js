import './App.css';
import Customer from './components/customer' ;
import { TableRow, TableHead, TableBody, Table, TableCell } from '@mui/material';

const customers =[{
  id : 1,
  image : 'http://placeimg.com/64/64/any/1',
  name : '홍길동',
  birthday : '701020',
  gender : '여자',
  job : '직장인'
},
{
  id : 2,
  image : 'http://placeimg.com/64/64/any/2',
  name : '가나다',
  birthday : '690310',
  gender : '남자',
  job : 'BOSS'
},
{
  id : 3,
  image : 'http://placeimg.com/64/64/any/3',
  name : '강건너',
  birthday : '471234',
  gender : '여자',
  job : '무직'
}]
function App() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers.map((a,i)=>{
              return(
              <Customer key={i}
                      id={customers[i].id}
                      image={customers[i].image}
                      name={customers[i].name}
                      birthday={customers[i].birthday}
                      gender={customers[i].gender}
                      job={customers[i].job}/>)
            })
          }
        </TableBody>
      </Table>
      </div>
  );
}

export default App;
