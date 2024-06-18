import '../css/App.css';
import CircularProgressBar from '../components/CircularProgressBar/CircularProgressBar';
import TableSection2 from '../components/TableComponents/TableSection2';
import { Form } from '../components/Form/Form';
import CategoriesHeader from '../components/AddCategories/CategoriesHeader';
import AddCategoriesTile from '../components/AddCategories/AddCategoriesTile';
import ExpenseSummary from '../components/ExpenseSummary/ExpenseSummary';

function InvoicePage() {
  return (
    <>
      <div className=" flex App" style={{ alignItems: 'flex-start' }}>
        <div className='p10'>

          <CircularProgressBar />
          <TableSection2 />
        </div>
        <div className='w100 p10' style={{ paddingRight: "20px" }}>
          <CategoriesHeader />
          <AddCategoriesTile label="WATEEN LOAD" amount="₹21,000.00" percent={80} />
        </div>

      </div>

      <Form />

      <ExpenseSummary />
    </>
  );
}

export default InvoicePage;
