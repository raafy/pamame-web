import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const registration = await prisma.registration.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    if (!registration) {
      return NextResponse.json(
        { error: "Registration not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(registration);
  } catch (error) {
    console.error("Error fetching registration:", error);
    return NextResponse.json(
      { error: "Failed to fetch registration" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await req.json();

    const updatedRegistration = await prisma.registration.update({
      where: { id: parseInt(params.id) },
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
        child1_dob: data.child1DOB ? new Date(data.child1DOB).toLocaleDateString("ms-MY") : null,
        child1_id_type: data.child1IDType,
        child1_ic: data.child1IC ?? null,
        child1_passport: data.child1Passport ?? null,
        child2_name: data.child2Name ?? null,
        child2_nickname: data.child2Nickname ?? null,
        child2_gender: data.child2Gender ?? null,
        child2_age: parseInt(data.child2Age) ?? null,
        child2_dob: data.child2DOB ? new Date(data.child2DOB).toLocaleDateString("ms-MY") : null,
        child2_id_type: data.child2IDType ?? null,
        child2_ic: data.child2IC ?? null,
        child2_passport: data.child2Passport ?? null,
        child3_name: data.child3Name ?? null,
        child3_nickname: data.child3Nickname ?? null,
        child3_gender: data.child3Gender ?? null,
        child3_age: parseInt(data.child3Age) ?? null,
        child3_dob: data.child3DOB ? new Date(data.child3DOB).toLocaleDateString("ms-MY") : null,
        child3_id_type: data.child3IDType ?? null,
        child3_ic: data.child3IC ?? null,
        child3_passport: data.child3Passport ?? null,
        add_child_amount: data.addChildAmount ?? null,
        add_child1_name: data.addChild1Name ?? null,
        add_child1_nickname: data.addChild1Nickname ?? null,
        add_child1_gender: data.addChild1Gender ?? null,
        add_child1_age: parseInt(data.addChild1Age) ?? null,
        add_child1_dob: data.addChild1DOB ? new Date(data.addChild1DOB).toLocaleDateString("ms-MY") : null,
        add_child1_id_type: data.addChild1IDType,
        add_child1_ic: data.addChild1IC ?? null,
        add_child1_passport: data.addChild1Passport ?? null,
        add_child2_name: data.addChild2Name ?? null,
        add_child2_nickname: data.addChild2Nickname ?? null,
        add_child2_gender: data.addChild2Gender ?? null,
        add_child2_age: parseInt(data.addChild2Age) ?? null,
        add_child2_dob: data.addChild2DOB ? new Date(data.addChild2DOB).toLocaleDateString("ms-MY") : null,
        add_child2_id_type: data.addChild2IDType ?? null,
        add_child2_ic: data.addChild2IC ?? null,
        add_child2_passport: data.addChild2Passport ?? null,
        add_child3_name: data.addChild3Name ?? null,
        add_child3_nickname: data.addChild3Nickname ?? null,
        add_child3_gender: data.addChild3Gender ?? null,
        add_child3_age: parseInt(data.addChild3Age) ?? null,
        add_child3_dob: data.addChild3DOB ? new Date(data.addChild3DOB).toLocaleDateString("ms-MY") : null,
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
        payment_image: data.paymentImagePath,
        total_amount: parseFloat(data.totalAmount).toFixed(2),
      },
    });

    return NextResponse.json(updatedRegistration);
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json(
      { error: "Failed to update registration" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.registration.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json({ message: "Registration deleted successfully" });
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json(
      { error: "Failed to delete registration" },
      { status: 500 },
    );
  }
}
