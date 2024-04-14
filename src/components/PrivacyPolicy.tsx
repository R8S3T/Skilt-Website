import React from 'react';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent.tsx';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-policy-container">
            <PrivacyPolicyContent />
        </div>
    );
};

export default PrivacyPolicy;
