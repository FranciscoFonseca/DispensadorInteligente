import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const funcionBotonCocaCola = () => {
    console.log('Boton de Coca Cola');
  };

  const funcionBotonPepsi = () => {
    console.log('Boton de Pepsi');
  };

  const funcionBotonLipton = () => {
    console.log('Boton de Lipton');
  };

  const funcionBotonCanadaDry = () => {
    console.log('Boton de Canada Dry');
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('./imagenes/fondo.png')}>
        <View style={estilos.contenedorPrincipal}>
          <TouchableOpacity
            onPress={funcionBotonCocaCola}
            style={[estilos.touchableContainer, estilos.colorCocaCola]}>
            <View style={estilos.viewBoton}>
              <View style={estilos.viewLogo}>
                <Image
                  source={require('./imagenes/cocacola-logo.png')}
                  style={estilos.imagen}
                />
              </View>
              <View style={estilos.viewTexto}>
                <Text style={estilos.texto}>Coca Cola</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={funcionBotonPepsi}
            style={[estilos.touchableContainer, estilos.colorPepsi]}>
            <View style={estilos.viewBoton}>
              <View style={estilos.viewLogo}>
                <Image
                  source={require('./imagenes/pepsi-logo.png')}
                  style={estilos.imagen}
                />
              </View>
              <View style={estilos.viewTexto}>
                <Text style={estilos.texto}>Pepsi</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={funcionBotonLipton}
            style={[estilos.touchableContainer, estilos.colorLipton]}>
            <View style={estilos.viewBoton}>
              <View style={estilos.viewLogo}>
                <Image
                  source={require('./imagenes/lipton-logo.png')}
                  style={estilos.imagen}
                />
              </View>
              <View style={estilos.viewTexto}>
                <Text style={estilos.texto}>Lipton</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={funcionBotonCanadaDry}
            style={[estilos.touchableContainer, estilos.colorCanadaDry]}>
            <View style={estilos.viewBoton}>
              <View style={estilos.viewLogo}>
                <Image
                  source={require('./imagenes/canada-dry-logo.png')}
                  style={estilos.imagen}
                />
              </View>
              <View style={estilos.viewTexto}>
                <Text style={estilos.texto}>Canada Dry</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  touchableContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  viewBoton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 60,
    height: 60,
  },
  viewLogo: {
    flex: 3,
    alignItems: 'center',
  },
  colorCocaCola: {
    backgroundColor: '#f40000',
  },
  colorPepsi: {
    backgroundColor: '#0018FF',
  },
  colorLipton: {
    backgroundColor: '#FEE302',
  },
  colorCanadaDry: {
    backgroundColor: '#00B121',
  },
  viewTexto: {
    flex: 7,
    alignItems: 'center',
  },
  contenedorPrincipal: {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 15,
  },
});

export default App;
