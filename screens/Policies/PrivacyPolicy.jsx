import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Modal } from "react-native"
import { styles } from "./styles/policy-styles";
import { privayPolicyContent } from "./privacy-policy-contents";

export default function PrivacyPolicy({ isVisible, onClose }) {
    return (
        <Modal visible={isVisible} animationType="slide" transparent={true}>

            <SafeAreaView style={[styles.modalContainer, { backgroundColor: 'rgba(0, 0, 0, 0.1)', }]}>
                <View style={styles.modalContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Privacy Policy</Text>
                    </View>

                    {/* Body / Contents */}
                    <View style={styles.body}>
                        <ScrollView style={styles.bodyContent}>
                            {privayPolicyContent.map(item => (
                                <View key={item.id} style={styles.sectionContainer}>
                                    <Text style={styles.sectionTitle}>{item.section}</Text>
                                    <Text style={styles.sectionText}>{item.content}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.backButton, { backgroundColor: "#437456" }]} onPress={onClose}>
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>

        </Modal>
    )
}

