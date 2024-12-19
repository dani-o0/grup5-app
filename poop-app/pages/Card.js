import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Modal} from 'react-native';


import Menu from '../components/Menu'
import StaticRating from '../components/StaticRating';
import GradientButton from '../components/GradientButton';
import Rating from '../components/Rating';
import Input from '../components/CustomTextInput';
import { flushSync } from 'react-dom';

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { FIREBASE_STORAGE } from '../firebaseConfig';

export default function Card({route}) {
    const {id, name, imageURL, rating, description, author, location, creationDate, comments, commentAuthor} = route.params;


    const [newRatingState, setNewRatingState] = useState(false); // Estado para manejar si hay un nuevo comentario
    const [newRating, setRating] = useState(0);
    const handleNewRating = () => {
        setNewRatingState(true); // Cambiar el estado de newComment a true
      };
      const saveNewRating = async () => {
        try {
          // Referencia al documento específico en Firestore
          const locationRef = doc(FIREBASE_STORAGE, 'Lavabos', id);
      
          // Obtener el documento
          const docSnap = await getDoc(locationRef);
          
          if (docSnap.exists()) {
            // Obtener el array de calificaciones actual
            const currentRatings = docSnap.data().rating || [];
            
            // Agregar el nuevo rating al array
            const updatedRatings = [...currentRatings, newRating];
      
            // Actualizar el documento con el nuevo array de calificaciones
            await updateDoc(locationRef, {
              rating: updatedRatings,
            });
      
            console.log('Rating guardado exitosamente');
          } else {
            console.log('No se encontró el documento');
          }
        } catch (error) {
          console.error('Error al guardar el rating:', error);
        }
    }
      const handleAcceptRating = async () => {
        await saveNewRating(); // Guardar el nuevo rating en Firebase
        setNewRatingState(false); // Cerrar el modal después de guardar
        console.log('ID del documento:', id);
        console.log('Nuevo rating:', newRating);
      };
      const closeModalRating = () => {
        setNewRatingState(false); // Cambiar el estado de newComment a true
      };


      const [newCommentState, setNewCommentState] = useState(false); // Estado para manejar si hay un nuevo comentario
      const [commentText, setCommentText] = useState(''); // Para almacenar el texto del comentario

      const handleNewComment = () => {
        setNewCommentState(true); // Cambiar el estado de newComment a true
        if (!commentText.trim()) {
          console.log('Comentario vacío');
          return; // No agregar si el comentario está vacío
        }
      };

      const handleAcceptComment = async () => {
        // await saveNewComment(); // Guardar el nuevo rating en Firebase
        setNewRatingState(false); // Cerrar el modal después de guardar
        console.log('ID del documento:', id);
        console.log('Nuevo comentario:', commentText);
      };
      const closeModalComment = () => {
        setNewCommentState(false); // Cambiar el estado de newComment a true
      };

    // Formatear la fecha a una cadena legible, por ejemplo, con `toLocaleDateString`
    const displayDate = creationDate?.toDate ? creationDate.toDate().toLocaleDateString() : new Date(creationDate).toLocaleDateString();
      
    const renderItem = ({ item }) => (
      <View style={styles.commentContainer}>
        <Text style={styles.author}>{item.authorName || 'Anónimo'}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>Creado el día {item.creationDate?.toDate ? item.creationDate.toDate().toLocaleDateString() : new Date(item.creationDate).toLocaleDateString()}</Text>
      </View>
    );

    return (
        <View style={styles.mainView}>
        <View style={styles.tabView}>
            <Image source={{uri: imageURL}} style={styles.image}/>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{description}</Text>
                <Text style={styles.text2}>Creado el dia {displayDate}</Text>
            </View>
            <StaticRating style={styles.rating} rating={rating}/>
            {!newRatingState && !newCommentState && (
              <View style={styles.buttonContainer}>
                <GradientButton title="Añadir comentario" onPress={handleNewComment} isPrimary={true} width="40%" />
                <GradientButton title="Añadir valoración" onPress={handleNewRating} isPrimary={true} width="40%" />
              </View>
            )}

            {newCommentState && (
              <View>
                
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={newCommentState}
                  onRequestClose={closeModalComment}
                >
                  <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                      <Input placeholder="Escribe tu comentario..." secondary={true} value={commentText} onChangeText={setCommentText} />
                      <View style={styles.buttonContainer}>
                        <GradientButton title="Aceptar" onPress={handleAcceptComment} isPrimary={true} width="40%" />
                        <GradientButton title="Cerrar" onPress={closeModalComment} isPrimary={false} width="40%" />
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            )}

            {newRatingState && (
              <View style={styles.newRatingContainer}>
                <Rating onChange={setRating} />
                <View style={styles.buttonContainer}>
                  <GradientButton title="Aceptar" onPress={handleAcceptRating} isPrimary={true} width="40%" />
                  <GradientButton title="Cerrar" onPress={closeModalRating} isPrimary={false} width="40%" />
                </View>
              </View>
            )}


            <View style={{flex: 1}}>
                <View style={styles.comentariosText}>
                    <Text style={{color: 'white'}}>
                        Comentarios:
                    </Text>
                    {comments?.length > 0 ? (
                      <FlatList
                        data={comments}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    ) : (
                      <Text style={{ color: 'white', textAlign: 'center' }}>Sin comentarios.</Text>
                    )}
                </View>
            </View>
        </View>
        <Menu style={styles.menuView} currentSection={2} />
      </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#151723',
      },
      tabView: {
        flex: 7,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      menuView: {
        flex: 1,
      },
      title: {
        color: 'white',
        fontSize: 36,
      },
      image: {
        width: 300,
        height: 250,
        borderRadius: 10,
        marginTop: 50,
      },
      textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#56516A',
        borderRadius: 20,
        marginBottom: 10,
      },
      text1: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
      },
      text2: {
        color: 'white',
        fontSize: 12,
      },
      rating: {
        margin: 50,
      },
      comentariosText: {
        flex: 1,
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 10,
      },
      commentContainer: {
        backgroundColor: '#56516A',
        padding: 10,
        paddingHorizontal: 50,
        marginBottom: 10,
        borderRadius: 10,
      },
      author: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      message: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
      },
      date: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
      },
      newRatingContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#56516A',
        borderRadius: 10,
        alignItems: 'center',
      },
      newCommentContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#56516A',
        borderRadius: 10,
        alignItems: 'center',
      },
      newCommentText: {
        color: 'white',
        fontSize: 16,
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      modalView: {
        width: 300,
        backgroundColor: '#151723',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#56516A',
      },
      modalText: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
      },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

});
