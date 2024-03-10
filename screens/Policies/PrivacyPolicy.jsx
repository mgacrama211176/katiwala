import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Modal } from "react-native"
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/privacy-policy-styles";
import { privayPolicyContent } from "./privacy-policy-contents";

export default function PrivacyPolicy({ isVisible, onClose }) {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    // Go to the Register screen
    const handleAccept = () => {
        onClose()
        navigation.navigate("Register");
    }

    // Go back to the Login screen
    const handleBack = () => {
        onClose()
        navigation.navigate("Login");
    }

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>

            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.privacyHeader}>Privacy Policy</Text>
                    </View>

                    {/* Body / Contents */}
                    <View style={styles.body}>
                        <ScrollView style={styles.privacyContent}>
                            {privayPolicyContent.map(item => (
                                <View key={item.id} style={styles.sectionContainer}>
                                    <Text style={styles.sectionTitle}>{item.section}</Text>
                                    <Text style={styles.privacyText}>{item.content}</Text>
                                </View>
                            ))}
                            <View style={styles.checkboxContainer}>
                                <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                                    {isChecked && <Text style={styles.checkmark}>✓</Text>}
                                </TouchableOpacity>
                                <Text style={styles.checkboxText}>I have read and agree to the Privacy Policy</Text>
                            </View>
                        </ScrollView>
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}
