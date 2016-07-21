// Import React
import React from "react";
const Timeline = require('../timeline');
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";


// Import theme
import createTheme from "spectacle/lib/themes/default";

const ReactLogo = require('../reactLogo');

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  screenshot: require('../assets/screenshot.png')
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: '#d41a00',
  tertiary: "#000",
  quartenary: "#999"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck>
          <Slide bgColor="tertiary" bgColor="primary">
            <ReactLogo width="400px" fit/>
            <Heading size={2} textColor="secondary" fit >
              Writing user interfaces in javascript
            </Heading>
            <br/>
            <Link href="https://twitter.com/ZekeNierenberg">
              <Text caps textColor="tertiary">@ZekeNierenberg</Text>
            </Link>
            <Link href="https://twitter.com/Fullstack">
              <Text caps textColor="tertiary">@Fullstack</Text>
            </Link>
          </Slide>
          <Slide>
            <Timeline events={
              [
                {
                  label: 'brochureware',
                  start: '01/01/1991',
                  end: '01/01/1995'
                },
                {
                  label: 'dynamic web apps',
                  start: '01/01/1995',
                  end: '01/01/2003'
                },
                {
                  label: 'bothies',
                  start: '01/01/2003',
                  end: '01/01/2010'
                },
                {
                  label: 'rich clients',
                  start: '01/01/2010',
                  end: '01/01/2016'
                },
              ]
            }/>
          </Slide>
          <Slide>
            <Heading size={2}  textColor="tertiary">
              Stack of The Early Web
            </Heading>
            <br/>
            <CodePane textSize="16px" lang="text">{String.raw`+--------------------------------------------------+        +-----------------------+
|                                                  |        |                       |
|  + - - - - - - - - -        + - - - - - - - - +  |        |   + - - - - - - - -   |
|                     |                           <+--Req---+--                  |  |
|  |    Filesystem     <----->|   Web Server    |  |        |   |    Browser        |
|                     |                           -+--Res---+->                  |  |
|  + - - - - - - - - -        + - - - - - - - - +  |        |   + - - - - - - - -   |
|                                                  |        |                       |
+--------------------------------------------------+        +-----------------------+`}</CodePane>
          </Slide>
          <Slide transition={["fade"]} textColor="tertiary">
            <Heading size={2}  textColor="tertiary">
              Hypertext
            </Heading>
            <List>
              <Appear><ListItem>Anchors, images, headings</ListItem></Appear>
              <Appear><ListItem>Documents</ListItem></Appear>
              <Appear><ListItem>Information</ListItem></Appear>
              <Appear><ListItem>Semantic</ListItem></Appear>
            </List>
          </Slide>


          <Slide>
            <Image transition={["fade"]} width="100%" src={images.screenshot}/>
          </Slide>


          <Slide>
            <CodePane>{require('raw!../assets/example-html.html')}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              Stack of Web Apps
            </Heading>
            <br/>
            <CodePane textSize="16px" lang="text">{String.raw`+--------------------------------------------------+        +-----------------------+
|                                                  |        |                       |
|  + - - - - - - - - -        + - - - - - - - - +  |        |   + - - - - - - - -   |
|                     |                           <+--Req---+--                  |  |
|  |    Databases      <----->|   Web Server    |  |        |   |    Browser        |
|                     |                           -+--Res---+->                  |  |
|  + - - - - - - - - -        + - - - - - - - - +  |        |   + - - - - - - - -   |
|                                                  |        |                       |
+--------------------------------------------------+        +-----------------------+`}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              Server
            </Heading>
            <br/>
            <CodePane lang="php">{require('raw!../assets/example-nojs.php')}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              Client
            </Heading>
            <br/>
            <CodePane lang="php">{require('raw!../assets/examplephp.html')}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              "Bothies"
            </Heading>
            <br/>
            <CodePane textSize="16px" lang="text">{String.raw`+------------------------+  +-----------------------+      +--------------------------+
|                        |  |                       |      |                          |
|  + - - - - - - - - -   |  |  + - - - - - - - - +  |      |     +---------------+    |
|                     |  |  |                      <+--Req-+---  |RenderingEngine|    |
|  |     Database      <-+--+->|   Web Server    |  |      |     +---------------+    |
|                     |  |  |                      -+--Res-+--->         ^            |
|  + - - - - - - - - -   |  |  + - - - - - - - - +  |      |             v            |
|                        |  |                       |      |     +---------------+    |
+------------------------+  +-----------------------+      |     |      DOM      |    |
                                                           |     +---------------+    |
                                                           |             ^            |
                                                           |             v            |
                                                           |     +---------------+    |
                                                           |     | Your JS Code  |    |
                                                           |     +---------------+    |
                                                           |                          |
                                                           +--------------------------+`}</CodePane>
          </Slide>


          <Slide>
            <Heading size={2}  textColor="tertiary">
              Server
            </Heading>
            <br/>
            <CodePane lang="php">{require('raw!../assets/example.php')}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              Client
            </Heading>
            <br/>
            <CodePane lang="php">{require('raw!../assets/examplephp-js.html')}</CodePane>
          </Slide>



          <Slide>
            <Heading size={2}  textColor="tertiary">
              Rich Web
            </Heading>
            <br/>
            <CodePane textSize="16px" lang="text">{String.raw`+------------------------+  +-----------------------+      +--------------------------+
|                        |  |                       |      |                          |
|  + - - - - - - - - -   |  |  + - - - - - - - - +  |      |     +---------------+    |
|                     |  |  |                      <+--Req-+---  |RenderingEngine|    |
|  |     Database      <-+--+->|                 |  |      |     +---------------+    |
|                     |  |  |                      -+--Res-+--->         ^            |
|  + - - - - - - - - -   |  |  |                 |  |      |             v            |
|                        |  |                       |      |     +---------------+    |
+------------------------+  |  |   Web Server    |  |      |     |      DOM      |    |
                            |                       |      |     +---------------+    |
                            |  |                 |  |      |             ^            |
                            |                       |      |             v            |
                            |  |                 |<-+-Req--+--   +---------------+    |
                            |                       |      |     | Your JS Code  |    |
                            |  |                 |--+-Res--+-->  +---------------+    |
                            |   - - - - - - - - -   |      |                          |
                            +-----------------------+      +--------------------------+`}</CodePane>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">
              Client
            </Heading>
            <br/>
            <CodePane lang="html">{require('raw!../assets/rich.html')}</CodePane>
          </Slide>

          <Slide textColor="tertiary">
            <Heading size={2}  textColor="tertiary">
              Problems in the platform
            </Heading>
          </Slide>

          <Slide textColor="tertiary">
            <Heading size={2}  textColor="tertiary">
              1. HTML is not UI Programming.
            </Heading>
          </Slide>
          <Slide>
            <CodePane lang="cpp">{require('raw!../assets/example.cpp')}</CodePane>
          </Slide>
          <Slide>
            <Image src={require('../assets/QComboBoxSelectionChange.png')}></Image>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">2. State management</Heading>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">3. Modularity / Reusability</Heading>
          </Slide>

          <Slide>
            <Heading size={2}  textColor="tertiary">4. Performance</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}


