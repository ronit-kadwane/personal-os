#!/usr/bin/env python3
"""
Generates an ATS-compliant, pure PDF 1.4 resume for Ronit Kadwane.
Does not require third-party libraries.
"""
import sys

def escape_pdf(text):
    """
    Escape special characters for raw PDF literal text string syntax.

    :param text: Raw input string
    :return: Escaped string safe for PDF text stream insertion
    """
    return text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')

def build_page_one_stream():
    """
    Construct PDF literal text stream for Page 1.
    Covers header, summary, technical arsenal, and experience at Nagarro, Maven, and Refrens.

    :return: Stream string for page 1
    """
    stream1 = []
    stream1.append("BT\n")
    
    # Title / Header
    stream1.append("/F2 20 Tf\n40 750 Td\n(RONIT KADWANE) Tj\n")
    stream1.append("/F1 10 Tf\n0 -16 Td\n(Staff Engineer & Full-Stack Architect | Surat, India \\(Open to Global Remote\\)) Tj\n")
    stream1.append("/F1 9 Tf\n0 -14 Td\n(Email: kadwane.ronit@gmail.com   GitHub: github.com/ronit-kadwane   LinkedIn: linkedin.com/in/ronit-kadwane-981017b8) Tj\n")
    stream1.append("ET\n")
    
    # Horizontal line
    stream1.append("0.7 0.7 0.7 RG\n1 w\n40 705 m 572 705 l S\n")
    
    stream1.append("BT\n")
    # Professional Summary
    stream1.append("/F2 11 Tf\n40 688 Td\n(PROFESSIONAL SUMMARY) Tj\n")
    stream1.append("/F1 9 Tf\n0 -14 Td\n(Staff Engineer & Full-Stack Architect with over 11 years of experience designing high-throughput distributed systems) Tj\n")
    stream1.append("0 -12 Td\n(and orchestrating resilient end-to-end production architectures across React, React-Native, Node.js, and cloud ecosystems.) Tj\n")
    stream1.append("0 -12 Td\n(Active pioneer in autonomous AI agent orchestration and prompt-engineered vibe coding, delivering live production software.) Tj\n")

    # Technical Skills
    stream1.append("0 -20 Td\n/F2 11 Tf\n(TECHNICAL ARSENAL) Tj\n")
    stream1.append("/F1 9 Tf\n0 -14 Td\n(Languages & Frameworks: JavaScript \\(ES6+\\), ReactJS, NextJS, React-Native, NodeJS, Android Native, HTML5, CSS3) Tj\n")
    stream1.append("0 -13 Td\n(AI & Autonomous Systems: Autonomous AI Agent Orchestration, Vibe Coding, Prompt & Skill Engineering, Multi-Agent Systems) Tj\n")
    stream1.append("0 -13 Td\n(Backend & Cloud: ExpressJS, FeathersJS, LoopBack, AWS Lambda, Google Cloud Functions, Firebase, MongoDB) Tj\n")
    stream1.append("0 -13 Td\n(Architecture & Engineering: System Architecture, Database Schema Design, Offline-First Sync, REST APIs, Scalability) Tj\n")
    stream1.append("0 -13 Td\n(Tooling & Leadership: Technical Leadership, Team Mentorship, Agile/Jira, Git, Chromecast SDK, Node-RED) Tj\n")

    # Experience
    stream1.append("0 -22 Td\n/F2 11 Tf\n(PROFESSIONAL EXPERIENCE) Tj\n")
    
    # Nagarro
    stream1.append("0 -16 Td\n/F2 10 Tf\n(Nagarro Software Pvt. Ltd. \\(Surat, India\\) - Staff Engineer) Tj\n")
    stream1.append("/F1 8.5 Tf\n400 0 Td\n(Sep 2021 - Present) Tj\n-400 0 Td\n")
    stream1.append("/F1 9 Tf\n0 -13 Td\n(- Promoted to Staff Engineer in Apr 2026 \\(previously Assoc. Staff Engineer in Feb 2023\\), driving system architecture.) Tj\n")
    stream1.append("0 -12 Td\n(- Architected client profile evaluation engine utilizing React-Native, React, Node.js, and MongoDB for financial insights.) Tj\n")
    stream1.append("0 -12 Td\n(- Spearheaded technical strategy, engineering governance, and resilient architectures across cross-functional teams.) Tj\n")

    # Maven Agency
    stream1.append("0 -18 Td\n/F2 10 Tf\n(Maven Agency Pvt. Ltd. \\(Surat, India\\) - FullStack Developer) Tj\n")
    stream1.append("/F1 8.5 Tf\n400 0 Td\n(Dec 2020 - Sep 2021) Tj\n-400 0 Td\n")
    stream1.append("/F1 9 Tf\n0 -13 Td\n(- Handled South Africa based enterprise client delivering conversational AI chatbots and user behavior telemetry.) Tj\n")
    stream1.append("0 -12 Td\n(- Led migration of client's legacy systems into modern JavaScript frameworks, optimizing performance and delivery cycles.) Tj\n")

    # Refrens
    stream1.append("0 -18 Td\n/F2 10 Tf\n(Refrens Internet Pvt. Ltd. \\(Surat, India\\) - Product Engineer) Tj\n")
    stream1.append("/F1 8.5 Tf\n400 0 Td\n(Mar 2020 - Nov 2020) Tj\n-400 0 Td\n")
    stream1.append("/F1 9 Tf\n0 -13 Td\n(- Owned and scaled core workflow engine for B2B platform managing invoices, expenditures, and quotation lifecycle.) Tj\n")
    stream1.append("0 -12 Td\n(- Streamlined financial document generation speed and state synchronization for thousands of business users.) Tj\n")

    stream1.append("0 -30 Td\n/F1 8 Tf\n(Page 1 of 2  -  Ronit Kadwane Resume) Tj\n")
    stream1.append("ET\n")
    return "".join(stream1)

def build_page_two_stream():
    """
    Construct PDF literal text stream for Page 2.
    Covers Logicwind, Narola, Featured Highlights & Independent Work, and Education.

    :return: Stream string for page 2
    """
    stream2 = []
    stream2.append("BT\n")
    stream2.append("/F2 14 Tf\n40 750 Td\n(RONIT KADWANE - RESUME \\(Continued\\)) Tj\n")
    stream2.append("ET\n")
    stream2.append("0.7 0.7 0.7 RG\n1 w\n40 738 m 572 738 l S\n")
    stream2.append("BT\n")

    # Logicwind
    stream2.append("/F2 10 Tf\n40 715 Td\n(Logicwind \\(Surat, India\\) - FullStack Developer) Tj\n")
    stream2.append("/F1 8.5 Tf\n400 0 Td\n(Jan 2016 - Feb 2020) Tj\n-400 0 Td\n")
    stream2.append("/F1 9 Tf\n0 -14 Td\n(- DigiQC: Built digital quality check mobile app, CMS, and server with location-radius geo-lock and full offline sync.) Tj\n")
    stream2.append("0 -12 Td\n(- Chromecast Games: Built arcade game controllers \\(sender/receiver\\) streaming real-time events to Chromecast devices.) Tj\n")
    stream2.append("0 -12 Td\n(- Video Streaming: Built apps for Joyce Meyer Ministries & PragerU with Brightcove/JWPlayer and offline caching.) Tj\n")
    stream2.append("0 -12 Td\n(- Los Alisos: Resident portal for unit booking, automated billing, and work orders using LoopBack, Node-RED, MongoDB.) Tj\n")
    stream2.append("0 -12 Td\n(- Contactbook: Engineered Gmail contact sharing and co-editing platform for Google Workspace teams.) Tj\n")
    stream2.append("0 -12 Td\n(- Native Bridges: Built custom native Android plugins for React-Native, Ionic, and Cordova; built AWS Lambda microservices.) Tj\n")

    # Narola Infotech
    stream2.append("0 -18 Td\n/F2 10 Tf\n(Narola Infotech \\(P\\) LTD \\(Surat, India\\) - Software Engineer) Tj\n")
    stream2.append("/F1 8.5 Tf\n400 0 Td\n(Jun 2015 - Sep 2015) Tj\n-400 0 Td\n")
    stream2.append("/F1 9 Tf\n0 -13 Td\n(- Developed cost calculation calculator mobile application for embroidery machines using native Android.) Tj\n")
    stream2.append("0 -12 Td\n(- Engineered UI modules and payment integration for native Android e-commerce application.) Tj\n")

    # Key Production Highlights & Independent Work
    stream2.append("0 -22 Td\n/F2 11 Tf\n(FEATURED PRODUCTION HIGHLIGHTS & INDEPENDENT WORK) Tj\n")
    stream2.append("/F1 9 Tf\n0 -14 Td\n(- Karm Bungalows \\(Independent AI Agent Project | Live: karm-bungalows.vercel.app\\): Society platform built 100%) Tj\n")
    stream2.append("0 -12 Td\n(  via AI agent orchestration; features 147-plot interactive SVG vector map, search directory, and 4-language i18n.) Tj\n")
    stream2.append("0 -12 Td\n(- DigiQC \\(React-Native, FeathersJS, Node.js, MongoDB\\): Enterprise quality checks for architects with location radius lock.) Tj\n")
    stream2.append("0 -12 Td\n(- Chromecast Platform \\(React-Native, Chromecast SDK\\): Real-time interactive controllers with dynamic layout rendering.) Tj\n")
    stream2.append("0 -12 Td\n(- Financial Evaluation Module \\(React, React-Native, Node.js, MongoDB\\): Scalable financial insights engine at Nagarro.) Tj\n")

    # Education
    stream2.append("0 -22 Td\n/F2 11 Tf\n(EDUCATION) Tj\n")
    stream2.append("0 -14 Td\n/F2 10 Tf\n(Sarvajanik College of Engineering & Technology \\(Surat, India\\)) Tj\n")
    stream2.append("/F1 8.5 Tf\n400 0 Td\n(Jul 2011 - May 2015) Tj\n-400 0 Td\n")
    stream2.append("/F1 9 Tf\n0 -13 Td\n(Bachelor of Engineering \\(B.E.\\) in Computer Engineering  |  CGPA: 7.16 / 10.0) Tj\n")
    stream2.append("0 -12 Td\n(Core Courses: Data Structures, Algorithms, Distributed Systems, Database Management Systems, Software Engineering) Tj\n")

    # Footer
    stream2.append("0 -40 Td\n/F1 8 Tf\n(Page 2 of 2  -  Ronit Kadwane Resume  |  Verified Portfolio: github.com/ronit-kadwane) Tj\n")
    stream2.append("ET\n")
    return "".join(stream2)

def assemble_pdf(pages_streams):
    """
    Assemble standard PDF 1.4 catalog, page tree, font descriptors, and cross-reference table.

    :param pages_streams: List of page stream strings
    :return: Serialized bytearray representing valid PDF file
    """
    c1 = pages_streams[0].encode('latin1')
    c2 = pages_streams[1].encode('latin1')

    obj1 = b"<< /Type /Catalog /Pages 2 0 R >>"
    obj2 = b"<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>"
    obj3 = b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 7 0 R >>"
    obj4 = b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 8 0 R >>"
    obj5 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
    obj6 = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"
    obj7 = b"<< /Length " + str(len(c1)).encode('ascii') + b" >>\nstream\n" + c1 + b"\nendstream"
    obj8 = b"<< /Length " + str(len(c2)).encode('ascii') + b" >>\nstream\n" + c2 + b"\nendstream"

    objs = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8]

    out = bytearray(b"%PDF-1.4\n")
    xref = [0]
    for i, o in enumerate(objs, 1):
        xref.append(len(out))
        out.extend(f"{i} 0 obj\n".encode('ascii'))
        out.extend(o)
        out.extend(b"\nendobj\n")

    startxref = len(out)
    out.extend(f"xref\n0 {len(objs) + 1}\n".encode('ascii'))
    out.extend(b"0000000000 65535 f \n")
    for offset in xref[1:]:
        out.extend(f"{offset:010d} 00000 n \n".encode('ascii'))

    out.extend(f"trailer\n<< /Size {len(objs) + 1} /Root 1 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode('ascii'))
    return out

def build_pdf():
    """
    Build and write the 2-page ATS-compliant PDF resume (public/resume.pdf).
    Orchestrates page stream generation, object packaging, and file emission.
    """
    p1 = build_page_one_stream()
    p2 = build_page_two_stream()
    pdf_bytes = assemble_pdf([p1, p2])

    with open("public/resume.pdf", "wb") as f:
        f.write(pdf_bytes)
    print("public/resume.pdf generated successfully:", len(pdf_bytes), "bytes")

if __name__ == "__main__":
    build_pdf()
