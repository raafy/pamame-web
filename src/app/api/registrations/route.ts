import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: "mail.pamame.com.my",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready for our message", success);
  }
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const json = formData.get("data") as string;
    const data = JSON.parse(json);
    const total = formData.get("total");

    const file: File | null = formData.get("file") as unknown as File;

    console.log("Incoming request data:", data);
    console.log(file);

    if (!data || !data.email) {
      console.log("Invalid request data");
      return new Response("Invalid request data", { status: 400 });
    }

    // Handle the payment image upload
    let paymentImagePath = undefined;

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const path = join("/", "tmp", file.name);
      await writeFile(path, buffer);

      paymentImagePath = path; // Save the file path to store in the database
    }

    // Save the form data to the database using Prisma
    await prisma.registration.create({
      data: {
        guardian1_name: data.guardian1Name,
        guardian1_contact_no: data.guardian1ContactNo,
        guardian1_id_type: data.guardian1IDType,
        guardian1_ic: data.guardian1IC ?? null,
        guardian1_passport: data.guardian1Passport ?? null,
        guardian1_relationship: data.guardian1Relationship,
        guardian2_name: data.guardian2Name,
        guardian2_contact_no: data.guardian2ContactNo,
        guardian2_id_type: data.guardian2IDType,
        guardian2_ic: data.guardian2IC ?? null,
        guardian2_passport: data.guardian2Passport ?? null,
        guardian2_relationship: data.guardian2Relationship,
        main_contact: data.mainContact[0], // Assuming first value is the main contact
        address: data.address,
        email: data.email,
        emergency_name: data.emergencyName,
        emergency_contact_no: data.emergencyContactNo,
        emergency_relationship: data.emergencyRelationship,
        add_adult_amount: data.addAdultAmount,
        add_adult1_name: data.addAdult1Name ?? null,
        add_adult1_contact_no: data.addAdult1ContactNo ?? null,
        add_adult1_ic: data.addAdult1IC ?? null,
        add_adult1_relationship: data.addAdult1Relationship ?? null,
        add_adult2_name: data.addAdult2Name ?? null,
        add_adult2_contact_no: data.addAdult2ContactNo ?? null,
        add_adult2_ic: data.addAdult2IC ?? null,
        add_adult2_relationship: data.addAdult2Relationship ?? null,
        add_adult3_name: data.addAdult3Name ?? null,
        add_adult3_contact_no: data.addAdult3ContactNo ?? null,
        add_adult3_ic: data.addAdult3IC ?? null,
        add_adult3_relationship: data.addAdult3Relationship ?? null,
        children_amount: data.childrenAmount,
        child1_name: data.child1Name,
        child1_nickname: data.child1Nickname,
        child1_gender: data.child1Gender,
        child1_age: parseInt(data.child1Age),
        child1_dob: data.child1DOB ? new Date(data.child1DOB) : null,
        child1_id_type: data.child1IDType,
        child1_ic: data.child1IC ?? null,
        child1_passport: data.child1Passport ?? null,
        child2_name: data.child2Name ?? null,
        child2_nickname: data.child2Nickname ?? null,
        child2_gender: data.child2Gender ?? null,
        child2_age: parseInt(data.child2Age) ?? null,
        child2_dob: data.child2DOB ? new Date(data.child2DOB) : null,
        child2_id_type: data.child2IDType ?? null,
        child2_ic: data.child2IC ?? null,
        child2_passport: data.child2Passport ?? null,
        child3_name: data.child3Name ?? null,
        child3_nickname: data.child3Nickname ?? null,
        child3_gender: data.child3Gender ?? null,
        child3_age: parseInt(data.child3Age) ?? null,
        child3_dob: data.child3DOB ? new Date(data.child3DOB) : null,
        child3_id_type: data.child3IDType ?? null,
        child3_ic: data.child3IC ?? null,
        child3_passport: data.child3Passport ?? null,
        add_child_amount: data.addChildAmount ?? null,
        add_child1_name: data.addChild1Name ?? null,
        add_child1_nickname: data.addChild1Nickname ?? null,
        add_child1_gender: data.addChild1Gender ?? null,
        add_child1_age: parseInt(data.addChild1Age) ?? null,
        add_child1_dob: data.addChild1DOB ? new Date(data.addChild1DOB) : null,
        add_child1_id_type: data.addChild1IDType,
        add_child1_ic: data.addChild1IC ?? null,
        add_child1_passport: data.addChild1Passport ?? null,
        add_child2_name: data.addChild2Name ?? null,
        add_child2_nickname: data.addChild2Nickname ?? null,
        add_child2_gender: data.addChild2Gender ?? null,
        add_child2_age: parseInt(data.addChild2Age) ?? null,
        add_child2_dob: data.addChild2DOB ? new Date(data.addChild2DOB) : null,
        add_child2_id_type: data.addChild2IDType ?? null,
        add_child2_ic: data.addChild2IC ?? null,
        add_child2_passport: data.addChild2Passport ?? null,
        add_child3_name: data.addChild3Name ?? null,
        add_child3_nickname: data.addChild3Nickname ?? null,
        add_child3_gender: data.addChild3Gender ?? null,
        add_child3_age: parseInt(data.addChild3Age) ?? null,
        add_child3_dob: data.addChild3DOB ? new Date(data.addChild3DOB) : null,
        add_child3_id_type: data.addChild3IDType ?? null,
        add_child3_ic: data.addChild3IC ?? null,
        add_child3_passport: data.addChild3Passport ?? null,
        package_default: parseInt(data.packageDefault),
        addon_children_below_4: parseInt(data.addonChildrenBelow4),
        addon_children_5_to_10: parseInt(data.addonChildren5to10),
        addon_above_10: parseInt(data.addonAbove10),
        heard_info: data.heardInfo,
        heard_info_others: data.heardInfoOthers ?? null,
        heard_info_scode: data.heardInfoSCode ?? null,
        payment_image: paymentImagePath,
        total_amount: parseFloat(total as string).toFixed(2),
      },
    });

    var mailList = [
      data.email,
      // "superavatarofficial@gmail.com",
      // "info@neucleuseducation.com",
      // "assistme@pamame.com.my",
    ];

    await transporter.sendMail({
      from: process.env.MAIL_EMAIL,
      to: mailList,
      subject:
        "感谢您注册参加我们的 72小时·亲子森活挑战营 Thank you for participating in our Family Glamping Trip！",
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
            font-family: Arial, sans-serif;
            color: #333333;
            margin: 0;
            padding: 0;
            }
            .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #dddddd;
            background-color: #ffffff;
            }
            h1 {
            font-size: 24px;
            color: #444444;
            margin-bottom: 10px;
            }
            h2 {
            font-size: 20px;
            color: #444444;
            margin-bottom: 10px;
            margin-top: 20px;
            }
            p {
            line-height: 1.6;
            margin-bottom: 10px;
            }
            table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            }
            th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }
            th {
            background-color: #f2f2f2;
            }
            .footer {
            margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <p>
              感谢您报名参加我们的亲子森活挑战营！您的报名信息我们已经成功收到。<br/>
              Thank you for registering for Family Glamping Trip! We have successfully received your registration information.<br/><br/>
              以下是您提交的监护人和儿童详细信息。<br/>
              Below are the details of the guardian and children as submitted.<br/><br/>
            </p>
            <h1>Adults' Information</h1>
            <h2>Main Contact Information</h2>
            <table>
              <tr>
                <th>Main Contact<th>
                <td>${data.mainContact[0]}</td>
              </tr>
              <tr>
                <th>Email<th>
                <td>${data.email}</td>
              </tr>
              <tr>
                <th>Address<th>
                <td>${data.address}</td>
              </tr>
              <tr>
                <th>Referral<th>
                <td>${data.heardInfo}</td>
              </tr>
            </table>
            <h2>Guardian 1 Information</h2>
            <table>
              <tr>
                <th>Guardian 1 Name</th>
                <td>${data.guardian1Name}</td>
              </tr>
              <tr>
                <th>Guardian 1 Contact No</th>
                <td>${data.guardian1ContactNo}</td>
              </tr>
              <tr>
                <th>Guardian 1 ID Type</th>
                <td>${data.guardian1IDType}</td>
              </tr>
              ${
                data.guardian1IDType === "NRIC"
                  ? `
              <tr>
                <th>Guardian 1 IC</th>
                <td>${data.guardian1IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Guardian 1 Passport</th>
                <td>${data.guardian1Passport}</td>
              </tr>
              `
              }
              <tr>
                <th>Guardian 1 Relationship</th>
                <td>${data.guardian1Relationship}</td>
              </tr>
            </table>
            <h2>Guardian 2 Information</h2>
            <table>
              <tr>
                <th>Guardian 2 Name</th>
                <td>${data.guardian2Name}</td>
              </tr>
              <tr>
                <th>Guardian 2 Contact No</th>
                <td>${data.guardian2ContactNo}</td>
              </tr>
              <tr>
                <th>Guardian 2 ID Type</th>
                <td>${data.guardian2IDType}</td>
              </tr>
              ${
                data.guardian2IDType === "NRIC"
                  ? `
              <tr>
                <th>Guardian 2 IC</th>
                <td>${data.guardian2IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Guardian 2 Passport</th>
                <td>${data.guardian2Passport}</td>
              </tr>
              `
              }
              <tr>
                <th>Guardian 2 Relationship</th>
                <td>${data.guardian2Relationship}</td>
              </tr>
            </table>
            ${
              data.addAdultAmount > 0
                ? `
            <h2>Additional Adult 1 Information</h2>
            <table>
              <tr>
                <th>Additional Adult 1 Name</th>
                <td>${data.addAdult1Name}</td>
              </tr>
              <tr>
                <th>Additional Adult 1 Contact No</th>
                <td>${data.addAdult1ContactNo}</td>
              </tr>
              <tr>
                <th>Additional Adult 1 IC</th>
                <td>${data.addAdult1IC}</td>
              </tr>
              <tr>
                <th>Additional Adult 1 Relationship</th>
                <td>${data.addAdult1Relationship}</td>
              </tr>
            </table>
            `
                : ""
            }
            ${
              data.addAdultAmount > 1
                ? `
            <h2>Additional Adult 2 Information</h2>
            <table>
              <tr>
                <th>Additional Adult 2 Name</th>
                <td>${data.addAdult2Name}</td>
              </tr>
              <tr>
                <th>Additional Adult 2 Contact No</th>
                <td>${data.addAdult2ContactNo}</td>
              </tr>
              <tr>
                <th>Additional Adult 2 IC</th>
                <td>${data.addAdult2IC}</td>
              </tr>
              <tr>
                <th>Additional Adult 2 Relationship</th>
                <td>${data.addAdult2Relationship}</td>
              </tr>
            </table>
            `
                : ""
            }
            ${
              data.addAdultAmount > 2
                ? `
            <h2>Additional Adult 3 Information</h2>
            <table>
              <tr>
                <th>Additional Adult 3 Name</th>
                <td>${data.addAdult3Name}</td>
              </tr>
              <tr>
                <th>Additional Adult 3 Contact No</th>
                <td>${data.addAdult3ContactNo}</td>
              </tr>
              <tr>
                <th>Additional Adult 3 IC</th>
                <td>${data.addAdult3IC}</td>
              </tr>
              <tr>
                <th>Additional Adult 3 Relationship</th>
                <td>${data.addAdult3Relationship}</td>
              </tr>
            </table>
            `
                : ""
            }
            <h1>Children's Information</h1>
            ${
              data.childrenAmount > 0
                ? `
            <h2>Child 1 Information</h2>
            <table>
              <tr>
                <th>Child 1 Name</th>
                <td>${data.child1Name}</td>
              </tr>
              <tr>
                <th>Child 1 Nickname</th>
                <td>${data.child1Nickname}</td>
              </tr>
              <tr>
                <th>Child 1 Gender</th>
                <td>${data.child1Gender}</td>
              </tr>
              <tr>
                <th>Child 1 Age</th>
                <td>${data.child1Age}</td>
              </tr>
              <tr>
                <th>Child 1 DOB</th>
                <td>${data.child1DOB}</td>
              </tr>
              <tr>
                <th>Child 1 ID Type</th>
                <td>${data.child1IDType}</td>
              </tr>
              ${
                data.child1IDType === "MyKid"
                  ? `
              <tr>
                <th>Child 1 MyKid No</th>
                <td>${data.child1IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Child 1 Passport</th>
                <td>${data.child1Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            ${
              data.childrenAmount > 1
                ? `
            <h2>Child 2 Information</h2>
            <table>
              <tr>
                <th>Child 2 Name</th>
                <td>${data.child2Name}</td>
              </tr>
              <tr>
                <th>Child 2 Nickname</th>
                <td>${data.child2Nickname}</td>
              </tr>
              <tr>
                <th>Child 2 Gender</th>
                <td>${data.child2Gender}</td>
              </tr>
              <tr>
                <th>Child 2 Age</th>
                <td>${data.child2Age}</td>
              </tr>
              <tr>
                <th>Child 2 DOB</th>
                <td>${data.child2DOB}</td>
              </tr>
              <tr>
                <th>Child 2 ID Type</th>
                <td>${data.child2IDType}</td>
              </tr>
              ${
                data.child2IDType === "MyKid"
                  ? `
              <tr>
                <th>Child 2 MyKid No</th>
                <td>${data.child2IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Child 2 Passport</th>
                <td>${data.child2Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            ${
              data.childrenAmount > 2
                ? `
            <h2>Child 3 Information</h2>
            <table>
              <tr>
                <th>Child 3 Name</th>
                <td>${data.child3Name}</td>
              </tr>
              <tr>
                <th>Child 3 Nickname</th>
                <td>${data.child3Nickname}</td>
              </tr>
              <tr>
                <th>Child 3 Gender</th>
                <td>${data.child3Gender}</td>
              </tr>
              <tr>
                <th>Child 3 Age</th>
                <td>${data.child3Age}</td>
              </tr>
              <tr>
                <th>Child 3 DOB</th>
                <td>${data.child3DOB}</td>
              </tr>
              <tr>
                <th>Child 3 ID Type</th>
                <td>${data.child3IDType}</td>
              </tr>
              ${
                data.child3IDType === "MyKid"
                  ? `
              <tr>
                <th>Child 3 MyKid No</th>
                <td>${data.child3IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Child 3 Passport</th>
                <td>${data.child3Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            ${
              data.addChildAmount > 0
                ? `
            <h2>Additional Child 1 Information</h2>
            <table>
              <tr>
                <th>Additional Child 1 Name</th>
                <td>${data.addChild1Name}</td>
              </tr>
              <tr>
                <th>Additional Child 1 Nickname</th>
                <td>${data.addChild1Nickname}</td>
              </tr>
              <tr>
                <th>Additional Child 1 Gender</th>
                <td>${data.addChild1Gender}</td>
              </tr>
              <tr>
                <th>Additional Child 1 Age</th>
                <td>${data.addChild1Age}</td>
              </tr>
              <tr>
                <th>Additional Child 1 DOB</th>
                <td>${data.addChild1DOB}</td>
              </tr>
              <tr>
                <th>Additional Child 1 ID Type</th>
                <td>${data.addChild1IDType}</td>
              </tr>
              ${
                data.addChild1IDType === "MyKid"
                  ? `
              <tr>
                <th>Additional Child 1 MyKid No</th>
                <td>${data.addChild1IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Additional Child 1 Passport</th>
                <td>${data.addChild1Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            ${
              data.addChildAmount > 1
                ? `
            <h2>Additional Child 2 Information</h2>
            <table>
              <tr>
                <th>Additional Child 2 Name</th>
                <td>${data.addChild2Name}</td>
              </tr>
              <tr>
                <th>Additional Child 2 Nickname</th>
                <td>${data.addChild2Nickname}</td>
              </tr>
              <tr>
                <th>Additional Child 2 Gender</th>
                <td>${data.addChild2Gender}</td>
              </tr>
              <tr>
                <th>Additional Child 2 Age</th>
                <td>${data.addChild2Age}</td>
              </tr>
              <tr>
                <th>Additional Child 2 DOB</th>
                <td>${data.addChild2DOB}</td>
              </tr>
              <tr>
                <th>Additional Child 2 ID Type</th>
                <td>${data.addChild2IDType}</td>
              </tr>
              ${
                data.addChild2IDType === "MyKid"
                  ? `
              <tr>
                <th>Additional Child 2 MyKid No</th>
                <td>${data.addChild2IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Additional Child 2 Passport</th>
                <td>${data.addChild2Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            ${
              data.addChildAmount > 2
                ? `
            <h2>Additional Child 3 Information</h2>
            <table>
              <tr>
                <th>Additional Child 3 Name</th>
                <td>${data.addChild3Name}</td>
              </tr>
              <tr>
                <th>Additional Child 3 Nickname</th>
                <td>${data.addChild3Nickname}</td>
              </tr>
              <tr>
                <th>Additional Child 3 Gender</th>
                <td>${data.addChild3Gender}</td>
              </tr>
              <tr>
                <th>Additional Child 3 Age</th>
                <td>${data.addChild3Age}</td>
              </tr>
              <tr>
                <th>Additional Child 3 DOB</th>
                <td>${data.addChild3DOB}</td>
              </tr>
              <tr>
                <th>Additional Child 3 ID Type</th>
                <td>${data.addChild3IDType}</td>
              </tr>
              ${
                data.addChild3IDType === "MyKid"
                  ? `
              <tr>
                <th>Additional Child 3 MyKid No</th>
                <td>${data.addChild3IC}</td>
              </tr>
              `
                  : `
              <tr>
                <th>Additional Child 3 Passport</th>
                <td>${data.addChild3Passport}</td>
              </tr>
              `
              }
              </table>
              `
                : ""
            }
            <p>
              以下是您选择的配套：<br/>
              Below is the package you have selected:
            </p>
            <ul>
              ${
                data.packageDefault === "2800"
                  ? `
              <li>2 Adults 1 Child</li>
              `
                  : data.packageDefault === "1900"
                    ? `
              <li>1 Adult 1 Child</li>
              `
                    : ""
              }
              ${
                data.addonChildrenBelow4 > 0
                  ? `
              <li>添加额外孩子 (<4yo）Additional Child (<4yo) x ${data.addonChildrenBelow4 === 60 ? "1" : data.addonChildrenBelow4 === 120 ? "2" : data.addonChildrenBelow4 === 180 ? "3" : ""}</li>
              `
                  : ""
              }
              ${
                data.addonChildren5to10 > 0
                  ? `
              <li>添加额外孩子 (5-10yo）Additional Child (5-10yo) x ${data.addonChildren5to10 === 900 ? "1" : data.addonChildren5to10 === 1800 ? "2" : data.addonChildren5to10 === 2700 ? "3" : ""}</li>
              `
                  : ""
              }
              ${
                data.addonAbove10 > 0
                  ? `
              <li>添加额外成人 (>12yo）Additional Adult (>12yo) x ${data.addonAbove10 === 450 ? "1" : data.addonAbove10 === 900 ? "2" : data.addonAbove10 === 1350 ? "3" : ""}</li>
              `
                  : ""
              }
            </ul>
            <p><strong>Total Amount Paid: </strong> RM ${total}</p>
            <div class="footer">
              <p>
                我们将在2个工作日内通过私信通知您注册成功。<br/>
                You will be informed of your successful registration via WhatsApp PM within 2 working days.<br/><br/>
                收据将在5个工作日内通过 WhatsApp 私信发送。<br/>
                A receipt will be issued within 5 working days.<br/><br/>
                非常高兴能与您一同度过这个充满乐趣的活动。<br/>
                We are very excited to spend this fun-filled event with you!<br/><br/>
                如果您有任何疑问，请随时联系我们的客户服务。<br/>
                If you have any inquiries, please do not hesitate to contact our customer service.<br/><br/>
              </p>
              <p>CLICK to WhatsApp us -> <a href="https://api.whatsapp.com/send?phone=60143943403" target="_blank">[014-3943 403]</a></p>
              <p>
                Best Regards,<br/><br/>
                PaMaMe
              </p>
            </div>
          </div>
        </body>
      </html>
      `,
      attachments: [
        {
          filename: file.name,
          path: paymentImagePath,
        },
      ],
    });

    return new Response("Success!", { status: 200 });
  } catch (error) {
    console.log("Error sending email:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
