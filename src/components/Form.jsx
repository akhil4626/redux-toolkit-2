import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addbalence, negatebalence, updateFullName, updateMobilenumber } from "./slice";

function Form() {
	const [balance, setBalance] = useState(0);
	const [fullname, setFullname] = useState("");
	const [mobile, setMobile] = useState("");
	const dispatch = useDispatch();
	const data = useSelector((state) => {
		return state.users;
	});
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<div>
			<div>
				<input
					type="number"
					value={balance}
					onChange={(e) => {
						console.log(e.target.value);
						return setBalance(e.target.value);
					}}
				/>
				<button
					style={{ backgroundColor: "red" }}
					onClick={() => {
						console.log(data);
						dispatch(negatebalence(balance));
						setBalance(0);
					}}
				>
					Withdraw
				</button>
				<button
					onClick={() => {
						console.log(data);
						return dispatch(addbalence(balance));
					}}
				>
					Deposit
				</button>
			</div>
			<div>
				<input
					type="text"
					value={fullname}
					onChange={(e) => {
						console.log(e.target.value);
						return setFullname(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						console.log(data);
						return dispatch(updateFullName(fullname));
					}}
				>
					Update
				</button>
			</div>
			<div>
				<input
					type="number"
					value={mobile}
					onChange={(e) => {
						console.log(e.target.value);
						return setMobile(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						console.log(data);
						return dispatch(updateMobilenumber(mobile));
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
}

export default Form;
