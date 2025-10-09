# Project Portfolio Component Relationships

```mermaid
graph TB
    subgraph "Model Enhancement"
        CT[Council Tax<br/>£32k, 4pm]
        VAT[VAT Distribution<br/>£8k, 1pm]
        LFS[Monthly LFS Updates<br/>£32k, 4pm]
        BUF[Policy Buffer<br/>£40k, 5pm]
    end

    subgraph "User Experience"
        AI[AI Report Authoring<br/>£48k, 6pm]
        DATA[OBR/HMT Integration<br/>£24k, 3pm]
        NOTIF[Notifications<br/>£16k, 2pm]
    end

    subgraph "Community Growth"
        TRAIN[Monthly Trainings<br/>£32k, 4pm]
        SYMP[Annual Symposium<br/>£25k, 2pm]
        CONF[Conference Program<br/>£30k, 3pm]
        CRM[CRM System<br/>£16k, 2pm]
        HACK[Hackathon<br/>£20k, 2pm]
    end

    subgraph "Research Applications"
        POV[Poverty Dashboard<br/>£32k, 4pm]
    end

    %% Relationships
    CT --> POV
    VAT --> POV
    LFS --> AI
    BUF --> AI
    DATA --> AI
    AI --> TRAIN
    AI --> POV
    TRAIN --> SYMP
    SYMP --> CONF
    CRM --> NOTIF
    CRM --> TRAIN
    HACK --> SYMP

    %% Styling
    classDef high fill:#2ecc71,stroke:#27ae60,stroke-width:3px,color:#000
    classDef medium fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    classDef low fill:#95a5a6,stroke:#7f8c8d,stroke-width:1px,color:#000

    class CT,BUF,AI,TRAIN,SYMP,POV high
    class VAT,LFS,DATA,NOTIF,CONF,CRM,HACK medium
```

## How to view this diagram

1. Copy the mermaid code above
2. Paste into [Mermaid Live Editor](https://mermaid.live)
3. Or view in any markdown renderer that supports Mermaid (GitHub, VS Code with extensions)
