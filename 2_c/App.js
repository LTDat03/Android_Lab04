import { Text, SafeAreaView, StyleSheet,View,TextInput,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import {useState} from 'react'

export default function App() {
    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [passwordLength, setPasswordLength] = useState('8');
  return (
    <LinearGradient
      colors={['#3B3B98','#C4C4C400']}
      style={styles.container}
      >
        <View style={styles.content}>
          <View style={[styles.session,{paddingTop:40}]}>
            <Text style={styles.title}>PASSWORD</Text>
            <Text style={styles.title}>GENERATOR</Text>
          <View style={[styles.session,{paddingTop:20}]}>  
            <TextInput style={styles.txtPwd}>
            </TextInput>
          </View>
          </View>
          <View style={[styles.session,{marginTop:30,marginHorizontal:5}]}>
            <View style={styles.row}>
              <Text style={styles.label}>Password length</Text>
              <TextInput editable={false} style={styles.input} value={passwordLength} />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Include lower case letters</Text>
              <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Include upcase letters</Text>
              <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Include number</Text>
              <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Include special symbol</Text>
              <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
            </View>
          </View>
          <View style={styles.session}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    backgroundColor:'#3B3B98',
  },
  content:{
    flex: 1,
    margin: 20,
    backgroundColor: "#23235B",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

  },
  session:{
    justifyContent:'center',
    alignItems:"center",
  },
  title:{
    fontSize:25,
    fontWeight:'700',
    textAlign:'center',
    color:'#FFFFFF',
  },
  txtPwd:{
    color: '#FFFFFF',
    fontSize: 30,
    height: 50,
    width: '90%',
    backgroundColor:'#151537',
    marginVertical: 10,
  },  
  row:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    justifyContent:'space-between',
    marginVertical:10,
  },
  label:{
    fontSize:20,
    fontWeight:'700',
    color:'#FFFFFF'
  },
  input:{
    backgroundColor: '#fff',
    width:'40%',
    height:33,
    textAlign: 'center',
  },
  checkbox:{
    margin:10,
    padding:12,
  },
  button:{
    backgroundColor: '#4B48A8',
    padding: 15,
    marginTop: 20,
  },
  buttonText:{
    fontSize:18,
    fontWeight:'700',
    textAlign:'center',
    color:'#FFFFFF'
  }
});
