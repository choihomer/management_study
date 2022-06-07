import './App.css';
import Customer from './components/customer' ;

const customers =[{
  id : 1,
  image : 'http://placeimg.com/64/64/any/1',
  name : '홍길동',
  birthday : '701020',
  gender : '여자',
  job : '직장인'
},
{
  id : 21,
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
      </div>
  );
}

export default App;
