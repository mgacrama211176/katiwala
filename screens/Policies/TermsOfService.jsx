import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Modal } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/policy-styles";
import { termsOfServiceContent } from "./terms-of-service-contents";
import PrivacyPolicy from "./PrivacyPolicy";

export default function TermsOfService({ isVisible, onClose }) {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    // Go to the Register screen
    const handleAccept = () => {
        if (isChecked) {
            onClose()
            navigation.navigate("Register");
        } else {
            alert("Please read and agree on the Terms of Service!");
        }
    }

    // Go back to the Login screen
    const handleBack = () => {
        onClose()
        navigation.navigate("Login");
    }

    // Show Privacy Policy modal
    const linkToPrivacyPolicyModal = () => {
        setShowPrivacyPolicy(true);
    }

    // CLose Privacy Policy modal
    const closeLinkToPrivacyPolicyModal = () => {
        setShowPrivacyPolicy(false);
    }

    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>

            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Katiwala Terms of Service</Text>
                    </View>

                    {/* Body / Contents */}
                    <View style={styles.body}>
                        <ScrollView style={styles.bodyContent}>
                            {termsOfServiceContent.map(item => (
                                <View key={item.id} style={styles.sectionContainer}>
                                    <Text style={styles.sectionTitle}>{item.section}</Text>
                                    <Text style={styles.sectionText}>{item.content}</Text>
                                </View>
                            ))}

                            <TouchableOpacity onPress={linkToPrivacyPolicyModal}>
                                <Text style={styles.privacyPolicyLinkText}>Read Privacy Policy</Text>
                            </TouchableOpacity>
                            {/* Open this modal */}
                            <PrivacyPolicy isVisible={showPrivacyPolicy} onClose={closeLinkToPrivacyPolicyModal} />

                            <View style={styles.checkboxContainer}>
                                <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                                    {isChecked && <Text style={styles.checkmark}>✓</Text>}
                                </TouchableOpacity>
                                <Text style={styles.checkboxText}>I have read and agree on this Terms</Text>
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

