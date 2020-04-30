describe("When running the DICOM webapp", () => {
  before(() => {
    cy.start()
    cy.compute()
  });

  it("should load a DICOM file and be able to filter by patient name", () => {
    const fileName = "dicom_rt_plan.dcm";

    cy.fixture(fileName, 'base64')
      .then(fileContent => {
        cy.get('[data-baseweb="file-uploader"] > div')
          .first()
          .attachFile(
            { fileContent, fileName, mimeType: 'application/octet-stream', encoding: 'base64' },
            {
              force: true,
              subjectType: "drag-n-drop",
              events: ["dragenter", "drop"]
            }
          );
        cy.compute()

        cy.get(".stTextInput input")
          .first()
          .type("Patient's Name{enter}");
        cy.compute()

        cy.get(`.stMarkdown code`).last().should("have.text", "(0010, 0010) Patient's Name                      PN: 'PHYSICS^MOCK'")
    });
  });
});
