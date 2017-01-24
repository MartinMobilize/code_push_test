import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

    // then add it to the plugin list
Reactotron
  .configure()
  .use(reactotronRedux()) //  <- here i am!
  .connect() //Don't forget about me!

