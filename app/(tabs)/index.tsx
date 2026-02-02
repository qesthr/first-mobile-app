import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#630063", dark: "#1a1a2e" }}
    >
      {/* Full Name */}
      <ThemedView style={styles.nameContainer}>
        <ThemedText type="title" style={styles.fullName}>
          Queen de los Reyes
        </ThemedText>
      </ThemedView>

      {/* Course & Year Level */}
      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle" style={styles.courseText}>
          Course & Year Level
        </ThemedText>
        <ThemedText style={styles.detailText}>
          Bachelor of Science in Information Technology
        </ThemedText>
        <ThemedText style={styles.detailText}>2nd Year</ThemedText>
      </ThemedView>

      {/* Divider */}
      <ThemedView style={styles.divider} />

      {/* Motto / Statement of Intent */}
      <ThemedView style={styles.mottoContainer}>
        <ThemedText type="subtitle" style={styles.mottoLabel}>
          Statement of Intent
        </ThemedText>
        <ThemedText style={styles.mottoText}>
          &quot;Committed to learning, growing, and building a future through
          technology.&quot;
        </ThemedText>
      </ThemedView>

      {/* Divider */}
      <ThemedView style={styles.divider} />

      {/* Family Names */}
      <ThemedView style={styles.familyContainer}>
        <ThemedText type="subtitle" style={styles.familyLabel}>
          Family
        </ThemedText>
        <ThemedText style={styles.familyMember}>
          Father: Rey A. de los Reyes
        </ThemedText>
        <ThemedText style={styles.familyMember}>
          Mother: Irma J. de los Reyes
        </ThemedText>
        <ThemedText style={styles.familyMember}>
          Brother: Kingking de los Reyes
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // Full Name
  nameContainer: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  fullName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
  },

  // Course & Year
  infoContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  courseText: {
    fontSize: 18,
    marginBottom: 6,
    opacity: 0.7,
  },
  detailText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 2,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: "#63006350",
    marginVertical: 16,
    borderRadius: 1,
  },

  // Motto
  mottoContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  mottoLabel: {
    fontSize: 18,
    marginBottom: 8,
    opacity: 0.7,
  },
  mottoText: {
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 24,
    opacity: 0.85,
  },

  // Family
  familyContainer: {
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  familyLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  familyMember: {
    fontSize: 15,
    marginBottom: 6,
    paddingLeft: 8,
  },
});
