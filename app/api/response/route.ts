import { NextRequest, NextResponse } from "next/server";

export async function GET(res: NextResponse, req : NextRequest) {

    const json = [
        {
            "content" : `
            1:name of test case->Deliver car:1:
xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_when_implicit adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='External_Output'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fv8RPkF_5FBEee3tMhnRIOJYQ_q_P'>
  <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
  <qmlstring type='String'>valid</qmlstring>
  </field>
  <field name='qmlf7ccd796c17241298ea9c499ccfd446d'>
  <qmlstring type='String'>approved</qmlstring>
  </field>
</qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FK3GXgOQKEee_2DyPh2ggf_2D_5FA_q_P'>
  <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
  <qmlstring type='String'>valid</qmlstring>
  </field>
</qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='External_Output'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5FBSAMUF_5FCEee3tMhnRIOJYQ_q_P'>
  <field name='qml196e1a480e6a41f2bfd06b692766e97e'>
  <qmlstring type='String'>available</qmlstring>
  </field>
  <field name='qmlba5668c5a7514ae08df7551675d6d758'>
  <qmlstring type='String'>allocated</qmlstring>
  </field>
</qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FS9f24OQKEee_2DyPh2ggf_2D_5FA_q_P'>
  <field name='qml196e1a480e6a41f2bfd06b692766e97e'>
  <qmlstring type='String'>available</qmlstring>
  </field>
</qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='External_Output'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_activity adqml7a64732d108346a0b28ea54715958b31_xmi_5FjPiMUF_5FDEee3tMhnRIOJYQ_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_when_implicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FjPiMUF_5FDEee3tMhnRIOJYQ_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='External_Output'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_activity adqml7a64732d108346a0b28ea54715958b31_xmi_5FldyzoF_5FDEee3tMhnRIOJYQ_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='Inp_business_when_explicit adqml7a64732d108346a0b28ea54715958b31_xmi_5FfWZGMOQKEee_2DyPh2ggf_2D_5FA_q_P'>
  </qmlrecord>

xml message-><?xml version="1.0" encoding="UTF-8"?>
<qmlrecord type='External_Output'>
  </qmlrecord>`},
    { "content": `2:name of test case->Reject invalid requests:2:
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q_P'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_when_implicit adqml5788885ec00f4fad95865618a30612e7_xmi_5Fn39a4F_5FBEee3tMhnRIOJYQ_q_P'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='External_Output'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fv8RPkF_5FBEee3tMhnRIOJYQ_q_P'>
          <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
          <qmlstring type='String'>valid</qmlstring>
          </field>
          <field name='qmlf7ccd796c17241298ea9c499ccfd446d'>
          <qmlstring type='String'>approved</qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FK3GXgOQKEee_2DyPh2ggf_2D_5FA_q_P'>
          <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
          <qmlstring type='String'>valid</qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='External_Output'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5FBSAMUF_5FCEee3tMhnRIOJYQ_q_P'>
          <field name='qml196e1a480e6a41f2bfd06b692766e97e'>
          <qmlstring type='String'>not available </qmlstring>
          </field>
          <field name='qmlba5668c5a7514ae08df7551675d6d758'>
          <qmlstring type='String'>not allocated</qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FS9f24OQKEee_2DyPh2ggf_2D_5FA_q_P'>
          <field name='qml196e1a480e6a41f2bfd06b692766e97e'>
          <qmlstring type='String'>not available </qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='External_Output'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5Fv8RPkF_5FBEee3tMhnRIOJYQ_q_P'>
          <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
          <qmlstring type='String'>incomplete</qmlstring>
          </field>
          <field name='qmlf7ccd796c17241298ea9c499ccfd446d'>
          <qmlstring type='String'>not approved</qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FK3GXgOQKEee_2DyPh2ggf_2D_5FA_q_P'>
          <field name='qml17397b2213ff4c1ba6f39e335caf52c3'>
          <qmlstring type='String'>incomplete</qmlstring>
          </field>
        </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='External_Output'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_activity adqml5788885ec00f4fad95865618a30612e7_xmi_5FHT9HsF_5FCEee3tMhnRIOJYQ_q_P'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='Inp_business_when_explicit adqml5788885ec00f4fad95865618a30612e7_xmi_5FXEHuAOQKEee_2DyPh2ggf_2D_5FA_q_P'>
          </qmlrecord>
        
        xml message-><?xml version="1.0" encoding="UTF-8"?>
        <qmlrecord type='External_Output'>
          </qmlrecord>`}
    ];

    return new NextResponse( JSON.stringify(json, null, 1), { status: 200 });
}