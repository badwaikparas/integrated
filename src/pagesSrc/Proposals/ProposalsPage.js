import './css/App2.css';
import Tile6 from './component/Tiles/Tiles6'
import AddTable from './component/addTable/AddTable';
import Table from './component/Table/Table';
// import Input from './component/Input';

function ProposalsPage() {
    return (
        <>
            <div>Proposals</div>
            <Tile6 context={"Proposals"} />
            <AddTable length={"12"} context={"Proposals"} />
            <Table />
            {/* <Input /> */}
        </>

    );
}

export default ProposalsPage;
