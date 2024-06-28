import nodemailer from 'nodemailer'
import { NextResponse } from "next/server"
export const POST =async (req:any)=>{
    try{

        const body = await req.json()
        
        sendVerificationCode(body.Email,body.Name,body.Message,body.Budget)
        return NextResponse.json({msg:'Sent Successfully'})
    }
    catch{
        return NextResponse.json({msg:'Failed'},{status:400})

    }
}

const sendVerificationCode = ( Email:string,Name:string,Message:string,Budget:string) => {
    const options = {
      from: "challengenius827@gmail.com",
      to: "aaronjeffery529@gmail.com",
      subject: "Get In Touch",
      html: `<p>Hello Jeffery this message system was setup with your backend system you have a client named: <b>${Name}</b> with and email address: <b>${Email}</ b> and his message is : <b>${Message}</b> with a budget of : <b>$${Budget}</b></p>`,
    };
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "challengenius827@gmail.com",
        pass: "Ghana@123",
      },
    });
  
    transporter.sendMail(options, function (err:any, info:any) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent:" + info.response);
    });
  };
  