// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CoverPage from './components/CoverPage';
import ViewHotel from './components/ViewHotel';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import About from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminPage from './components/AdminPage';
import Profile from './components/Profile';
import Entry from './components/Entry';
import View from './components/View';
import Client from './components/Client';
import Deluxe from './components/rooms/Deluxe';
import NonDeluxe from './components/rooms/NonDeluxe';
import FarmHouse from './components/rooms/FarmHouse';
import Resorts from './components/rooms/Resorts';
import Book from './components/rooms/Book';
import AddType from './components/AddType';
import ViewAdTypes from './components/ViewAdTypes';
import ClientViewTypes from './components/ClientViewTypes';
import Booking from './components/Booking';
import { useState } from 'react';
import ClientPending from './components/ClientPending';
import ClientCurrent from './components/ClientCurrent';
import ClientPast from './components/ClientPast';
import AdminAllC from './components/AdminAllC';
import AdminCurrentC from './components/AdminCurrentC';
import AdminApprovalP from './components/AdminApprovalP';
// import Book2 from './components/rooms/Book2';

function App() {
	
	const [bType, setBType] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
  return (
		<>
		<BrowserRouter>
		<NavBar 
		name={name}
		setName={setName}
		/>
		</BrowserRouter>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<><CoverPage/><Footer/></>}></Route>
				<Route path="/about" element={<About/>}></Route>
				<Route path="/signup" element={<SignUp/>}></Route>
				<Route path='/view' element={<ViewHotel/>}></Route>
				<Route path='/signin' element={
				<Login 
				name={name}
				setName={setName}
				email={email}
				setEmail={setEmail}
				/>
				}></Route>
				<Route path='/admin' element={<AdminPage/>}>
					<Route path='/admin/addType' element={<AddType/>}></Route>
					<Route path='/admin/adTypes' element={<ViewAdTypes/>}></Route>
					<Route path='/admin/entry' element={<Entry/>}></Route>
					<Route path='/admin/profile' element={<Profile/>}></Route>
					<Route path='/admin/viewhotel' element={<View/>}></Route>

					
					<Route path='/admin/adminAll' element={<AdminAllC/>}></Route>
					<Route path='/admin/current' element={<AdminCurrentC/>}></Route>
					<Route path='/admin/approval' element={<AdminApprovalP/>}></Route>
				</Route>
				<Route path='/client' element={<Client/>}>
					<Route path='/client/adTypes' element={
					<ClientViewTypes  
					bType = {bType}
					setBType = {setBType}
					/>}>
					</Route>
					<Route path='/client/booking' element={
					<Booking 
					bType={bType}
					name={name}
					email={email}
					/>
					}></Route>
					<Route path='/client/approvalPending' element={
					<ClientPending 
					name={name}
					email={email}
					/>
					}></Route>
					<Route path='/client/clientCurrent' element={
					<ClientCurrent 
					name={name}
					email={email}
					/>
					}></Route>
					<Route path='/client/clientPast' element={
					<ClientPast 
					name={name}
					email={email}
					/>
					}></Route>
				</Route>
				<Route path='/book' element={<Book/>}></Route>
				
			</Routes>
		</BrowserRouter>
	  </>
  );
}

export default App;