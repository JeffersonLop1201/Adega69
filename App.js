import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Adega 69
      </Text>
      <ScrollView>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/coca.png")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>Coca Cola</View>
            <View style={styles.Nome}>R$ 9,99</View>
          </View>
        </View>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/88306-corote-tutti-frutti-500ml.jpg")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>corote</View>
            <View style={styles.Nome}>R$ 2,50</View>
          </View>
        </View>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/an6kcu3f2ltlwsl4tpywfj6nmp2wqghvxrkn_450x600+fill_ffffff.png")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>Vinho</View>
            <View style={styles.Nome}>R$ 20,00</View>
          </View>
        </View>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/cerveja-spaten-600ml1-a49db9b6491dd4e1dc16441698365977-640-0.jpg")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>Cerveja</View>
            <View style={styles.Nome}>R$ 8,99</View>
          </View>
        </View>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/201818_14448.jpg")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>Dreher</View>
            <View style={styles.Nome}>R$ 100,50</View>
          </View>
        </View>
        <View style={styles.cxcont}>
          <View style={styles.cxfoto}>
          <Image style={styles.img} resizeMethod="center" source={require("./assets/catuaba.jpg")}></Image>
          </View>
          <View style={styles.cxfoto}>
          <View style={styles.Nomet}>Catuaba</View>
            <View style={styles.Nome}>R$ 25,50</View>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffcc99',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 20,
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  img: {
    width: 105,
    height: 105,
    borderRadius: 15,
     
  },
  Nome: {
    fontSize: 20,
    fontWeight: 900,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    alignContent:'center',
    justifyContent:'center',
  },
  Nomet:{
    fontSize: 29,
    fontWeight: 900,
    color: '#fff',
    margin:20,
    marginBottom: 20,
    textAlign: 'center',
    alignContent:'center',
    justifyContent:'center',
  },
  cxfoto: {
    width: 125,
    height: 125,
    backgroundColor: '#ffcc99',
    borderRadius: 24,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#000',
  },
  cxcont: {
    flexDirection:'row',
    width: 300,
    height: 150,
    marginTop: 30,
    backgroundColor: '#ffb366',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 30,
    textShadowColor: '#000',

  }
});
