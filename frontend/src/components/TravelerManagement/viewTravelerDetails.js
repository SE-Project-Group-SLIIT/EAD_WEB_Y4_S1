import { React, useEffect, useState } from "react";

export default function ViewTravelerDetails({data, cl}) {
    const [NIC, settravelerNIC] = useState("");
    const [FullName, settravelerFullname] = useState("");
    const [Email, settravelerEmail] = useState("");
    const [PhoneNumber, settravelerPhone] = useState("");
    const [IsActive, settravelerIsActive] = useState("");

    useEffect(() => {
		console.log("data",data);
        if(data){
            settravelerNIC(data.nic);
            settravelerFullname(data.fullName);
            settravelerEmail(data.email);
            settravelerPhone(data.phoneNumber);
            settravelerIsActive(data.isActive);
        }
    }, [data]);

    return (
		<div class="card" style={{borderRadius: 10}}>
			<div class="card-body" style={{borderRadius: 10}}>
				<h5
					class="card-title"
					style={{
						marginBottom: 20,
						color: "#4CBB17",
						display: "flex",
						justifyContent: "center",
						fontSize: 25,
					}}>
					Booking Details
				</h5>
				<p
					class="card-text"
					style={{ fontWeight: 600, fontSize: 18 }}>
					NIC : &nbsp;{" "}
					{NIC}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Full Name : &nbsp; {" "}
					{FullName}
				</p>
				<p
					class="card-text"
					style={{
						fontWeight: 600,
						fontSize: 18,
						marginBottom: 50,
					}}>
					
				</p>
				
			</div>
		</div>
	);
}
