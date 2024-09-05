import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest, res: NextResponse) {

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<com.conformiq.tracedictionary:TraceDictionaryRoot xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:com.conformiq.tracedictionary="http://www.conformiq.com/emf/4/TraceDictionary">
  <slReferredPart/>
  <stepClassForRecordId key="Inp_business_activity adqml7a64732d108346a0b28ea54715958b31_xmi_5FjPiMUF_5FDEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_implicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FjPiMUF_5FDEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Car is allocated is performed"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_implicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FjPiMUF_5FDEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Car is allocated completes"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_activity adqml7a64732d108346a0b28ea54715958b31_xmi_5FldyzoF_5FDEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_explicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FfWZGMOQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Platform Transportation is performed"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_explicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FfWZGM_2DQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Platform Transportation completes"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_implicit adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Register Request is performed"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_implicit adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Register Request completes"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fv8RPkF_5FBEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FK3GXgOQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Review Request is performed where request is "/>
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepParameter" parameterId="qml17397b2213ff4c1ba6f39e335caf52c3" parameterName="request"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FK3GXg_2DQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Review Request completes with outcome "/>
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepParameter" parameterId="qmlf7ccd796c17241298ea9c499ccfd446d" parameterName="outcome"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5FBSAMUF_5FCEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FS9f24OQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Allocate Car is performed where car is "/>
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepParameter" parameterId="qml196e1a480e6a41f2bfd06b692766e97e" parameterName="car"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FS9f24_2DQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Allocate Car completes with outcome "/>
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepParameter" parameterId="qmlba5668c5a7514ae08df7551675d6d758" parameterName="outcome"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5FHT9HsF_5FCEee3tMhnRIOJYQ_q">
    <value xsi:type="com.conformiq.tracedictionary:HiddenStepClass"/>
  </stepClassForRecordId>
  <stepClassForRecordId key="Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FXEHuAOQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="When">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Request Rejected is performed"/>
    </value>
  </stepClassForRecordId>
  <stepClassForRecordId key="Outp_business_then_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FXEHuA_2DQKEee_2DyPh2ggf_2D_5FA_q">
    <value xsi:type="com.conformiq.tracedictionary:BusinessActionStepClass" kind="Then">
      <textualRendering xsi:type="com.conformiq.tracedictionary:BusinessActionStepLiteral" value="Request Rejected completes"/>
    </value>
  </stepClassForRecordId>
</com.conformiq.tracedictionary:TraceDictionaryRoot>`

    return new NextResponse( xml, { status: 200, headers: {
        "content-type": "application/xml"
    } });
}