import {View, Text, StyleSheet,Image,TouchableOpacity,Button} from 'react-native';
import {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.card}>
          <View style = {styles.productContainer}>
            <Image source={require('./assets/book.png')}/>
            <View style ={styles.produceDetails}>
              <Text style={styles.textBasic}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.textBasic}>Cung cấp bởi Tiki Trading</Text>
              <Text style={{  
                fontFamily: 'Roboto',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 21.09,
                color: '#EE0D0D'
              }}>141.800 đ</Text>
              <Text style={[styles.textBasic,{textDecorationLine:'line-through',color:"#808080"}]}>141.800 đ</Text>  
              <View style={styles.quanlityContainer}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                  <TouchableOpacity>
                  <FontAwesome style={{
                    padding:3,
                    backgroundColor:'#C4C4C4'
                  }} name="minus" />
                  </TouchableOpacity>
                  <Text style={{
                    fontSize:15,
                    fontWeight:'bold',
                    lineHeight:17.58
                  }}>1</Text>
                  <TouchableOpacity>
                  <FontAwesome style={{
                    padding:3,
                    backgroundColor:'#C4C4C4'
                  }} name="plus" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text style={[styles.textBasic,{color:'#134FEC'}]}>Mua sau</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection:'row',
            paddingLeft:10,gap:20,
            alignItems:'center'
          }}>
            <Text style={styles.textBasic}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text style={[styles.textBasic,{color:'#134FEC'}]}>Xem tại đây</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingRow}>
            <View style={styles.discountContainer}>
              <View style={styles.discoutBox}></View>
              <Text style={{
                fontSize:18,color:'#011627',fontWeight:'bold'
              }}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={{fontSize:18,fontWeight:'bold',color:'#FFFFFF'}}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.settingRow,{backgroundColor:'#FFFFFF',paddingVertical:15}]}>
        <Text style={styles.textBasic}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <TouchableOpacity>
          <Text style={{color:'#0A5EB7',textDecorationLine:'none',fontWeight:'bold'}}>Nhập tại đây</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.settingRow,{backgroundColor:'#FFFFFF',paddingVertical:15}]}>
        <Text style={{fontSize:18,color:'#011627',fontWeight:"700"}}>Tạm tính </Text>
        <Text style={{fontSize:18,color:'#EE0D0D',fontWeight:"700"}}>141.800 đ</Text>
      </View>
      <View style={{backgroundColor:'#FFFFFF',paddingVertical:20,gap:15}}>
        <View style={styles.settingRow}>
          <Text style={{fontSize:18,fontWeight:"700",color:'#808080'}}>Thành tiền</Text>
          <Text style={{fontSize:20,fontWeight:"700",color:'#EE0D0D'}}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'red',padding:10,marginHorizontal:10,borderRadius:5,alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:"700",color:'#FFFFFF'}}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>  
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#C4C4C4",
    justifyContent:'space-between',
  },
  section1: {
    gap: 20,
  },
  card:{
    backgroundColor:"#FFFFFF",
    paddingVertical:20,
    gap:20,
  },
  productContainer:{
    flexDirection: "row", 
    justifyContent:'space-between',
    gap:10,
    paddingHorizontal:10,
  },
  produceDetails:{
    justifyContent:'space-between',
  },
  quanlityContainer:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-between',
  },
  textBasic:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:12,
    lineHeight:14.06
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 10,
    height: 40,
    width: '65%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2
  },
  discoutBox:{
    height: 20,
    width: 40,
    backgroundColor: "yellow",
  },
  applyButton:{
    height: 40,
    width: '30%',
    backgroundColor: '#0A5EB7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:2
  },
  settingRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    gap:10
  }
});
