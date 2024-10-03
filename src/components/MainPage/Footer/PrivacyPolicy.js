import React from 'react';
import { Container, Card, CardContent, Typography, Link } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPolicy = () => {
    return (
        <div className="bg-light">
            <Container maxWidth="lg" className="py-5">
                <div className="text-center mb-5">
                    <Typography variant="h3" component="h1" className="mb-3 text-primary">
                        Privacy Policy
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Effective Date: October 2, 2024
                    </Typography>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Introduction
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Welcome to the JNTUGV University App. This Privacy Policy explains how we collect, use, and protect your personal
                                    information when you use our app or access our website at{' '}
                                    <Link href="https://jntugv.edu.in" color="primary">
                                        https://jntugv.edu.in
                                    </Link>
                                    .
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Information We Collect
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    We may collect the following types of personal information:
                                </Typography>
                                <ul>
                                    <li>Personal identification details (e.g., name, email address)</li>
                                    <li>App usage data and preferences</li>
                                    <li>Technical data such as device type and IP address</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    How We Use Your Information
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Your information is used to:
                                </Typography>
                                <ul>
                                    <li>Provide and maintain our services</li>
                                    <li>Improve user experience and functionality</li>
                                    <li>Communicate updates, offers, and other relevant information</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Data Protection
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    We take data protection seriously and use industry-standard measures such as encryption, secure servers, and
                                    authentication to protect your data.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Third-Party Services
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Our app may link to third-party services like Google, or social media. These services have their
                                    own privacy policies, and we recommend reviewing them to understand how they handle your information.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Cookies
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    We may use cookies to improve the functionality of our website and app. Cookies help us analyze web traffic and
                                    enhance user experience.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Changes to This Policy
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    We may update our Privacy Policy from time to time. Any changes will be reflected on this page, so we recommend
                                    checking back periodically.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h5" component="h2" className="text-secondary mb-3">
                                    Contact Us
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    For questions or concerns regarding this Privacy Policy, please contact us at{' '}
                                    <Link href="mailto:info@jntugv.edu.in" color="primary">
                                        info@jntugv.edu.in
                                    </Link>
                                    .
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>

           
        </div>
    );
};

export default PrivacyPolicy;
