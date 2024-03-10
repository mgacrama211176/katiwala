import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/privacy-policy-styles";
import { privayPolicyContent } from "./privacy-policy-contents";

export default function PrivacyPolicy() {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    // Go to the Register screen
    const handleAccept = () => {
        navigation.navigate("Register");
    }

    // Go back to the Login screen
    const handleBack = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

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

        </SafeAreaView>
    )
}
