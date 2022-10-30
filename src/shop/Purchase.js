import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductImage from "../asset/img/product_freestyle.webp";
import ProductTip1 from "../asset/img/product_freestyle_tip1.webp";
import ProductTip2 from "../asset/img/product_freestyle_tip2.jpeg";
import ProductTip3 from "../asset/img/product_freestyle_tip3.webm";
import ProductTip4 from "../asset/img/product_freestyle_tip4.webm";

import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Radio,
} from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

function Error() {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const openPurchaseDialog = () => {
    setIsPurchaseDialogOpen(true);
  };

  const closePurchaseDialog = () => {
    if (!isLoading) setIsPurchaseDialogOpen(false);
  };

  const onSetPurchseProduct = () => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
      setIsPurchased(true);
    }, [2000]);
  };

  const toExperiencePage = () => {
    navigate("/experience?needReload=true");
  };

  const blackOutlinedButtonSx = {
    color: "black",
    px: 2,
    py: 0.75,
    border: "2px solid black",
    borderRadius: "100px",
    fontWeight: 700,
    letterSpacing: "-1px",
    minWidth: "100px",
  };

  const blackContainedButtonSx = {
    backgroundColor: "black",
    color: "white",
    px: 2,
    py: 0.75,
    border: "2px solid black",
    borderRadius: "100px",
    fontWeight: 700,
    letterSpacing: "-1px",
    minWidth: "100px",
  };

  const productName = "The Freestyle";
  const productModelId = "SP-FBB3BA";
  const productMarketPrice = "1,190,000";
  const productMemberPrice = "1,118,000";
  const productBenefitPrice = "990,000";

  return (
    <Container
      id="purchase_page"
      maxWidth="false"
      sx={{
        py: 10,
        letterSpacing: "-1px",
        maxWidth: "1400px",
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Grid item sx={{ p: 3 }}>
          <img
            src={ProductImage}
            style={{ maxWidth: "750px", width: "100%" }}
          />
        </Grid>

        <Grid
          item
          sx={{ p: 4, backgroundColor: "#ffffff", borderRadius: "20px" }}
        >
          <Grid sx={{ mb: 5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <span
                style={{
                  color: "var(--samBlue)",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                설치상품
              </span>
              <Grid>
                <IconButton>
                  <ShareOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => setIsFavorite(!isFavorite)}>
                  {isFavorite ? (
                    <FavoriteIcon sx={{ fill: "red" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Grid>
            </Grid>
            <Grid>
              <span style={{ fontWeight: 900, fontSize: "24px" }}>
                {productName}
              </span>
            </Grid>
            <Grid>
              <span style={{ fontSize: "14px", color: "var(--textSub)" }}>
                {productModelId}
              </span>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <StarIcon
                  fontSize="small"
                  sx={{ color: "var(--starYellow)" }}
                />
                <span
                  style={{
                    fontWeight: 700,
                    marginLeft: "4px",
                    marginTop: "2px",
                    fontSize: "14px",
                  }}
                >
                  5.0
                </span>
                <span
                  style={{
                    marginLeft: "8px",
                    marginTop: "2px",
                    fontSize: "14px",
                    color: "var(--textSub)",
                    textDecoration: "underline",
                  }}
                >
                  35건
                </span>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <EditOutlinedIcon fontSize="small" />
                <span
                  style={{
                    marginLeft: "4px",
                    marginTop: "2px",
                    fontSize: "14px",
                    color: "var(--textSub)",
                    textDecoration: "underline",
                  }}
                >
                  상품평 쓰기
                </span>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ mb: 1 }}>
            <Grid
              container
              justifyContent="space-between"
              sx={{ fontSize: "15px", color: "var(--textSub)", mb: 0.5 }}
            >
              <span>판매가</span>
              <span>{productMarketPrice + "원"}</span>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              sx={{ fontSize: "15px", color: "var(--textSub)", mb: 0.5 }}
            >
              <span>회원가</span>
              <span>{productMemberPrice + "원"}</span>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <span style={{ fontSize: "15px" }}>혜택가</span>
              <Grid>
                <span style={{ fontSize: "20px", fontWeight: 900 }}>
                  {productBenefitPrice}
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700 }}>원</span>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ backgroundColor: "#f7f7f7", p: 2, borderRadius: "10px" }}>
            <Grid container alignItems="center" sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <span style={{ fontSize: "14px" }}>색상</span>
              </Grid>
              <Grid item xs={8} sx={{ display: "flex" }} alignItems="center">
                <Radio size="small" sx={{ p: 0, mr: 1 }} />
                <Grid>
                  <span style={{ fontSize: "14px", fontWeight: 700 }}>
                    화이트
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <span style={{ fontSize: "14px" }}>수량</span>
              </Grid>
              <Grid item xs={8}>
                <Grid
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    border: "1px solid darkgray",
                    width: "78px",
                    display: "flex",
                  }}
                >
                  <Grid sx={{ width: "26px", textAlign: "center", pt: 0.5 }}>
                    -
                  </Grid>
                  <Grid
                    sx={{
                      width: "26px",
                      textAlign: "center",
                      borderLeft: "1px solid darkgray",
                      borderRight: "1px solid darkgray",
                      pt: 0.5,
                    }}
                  >
                    1
                  </Grid>
                  <Grid sx={{ width: "26px", textAlign: "center", pt: 0.5 }}>
                    +
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 1.5 }}
            >
              <Grid style={{ fontSize: "11px", color: "var(--textSub)" }}>
                <span>삼성 멤버십</span>
                <span style={{ fontWeight: 700, marginLeft: "4px" }}>
                  42,220 포인트
                </span>
                <span style={{ marginLeft: "4px" }}>적립</span>
              </Grid>
              <KeyboardArrowDownIcon fontSize="small" />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            sx={{
              py: 2.5,
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
              alignItems: "center",
            }}
          >
            <Grid>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>혜택가</span>
            </Grid>
            <Grid>
              <span style={{ fontSize: "22px", fontWeight: 900 }}>
                {productBenefitPrice}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>원</span>
            </Grid>
          </Grid>

          <Grid container columnSpacing={1} sx={{ py: 2.5 }}>
            <Grid item sx={4}>
              <Button
                startIcon={<CardGiftcardIcon sx={{ mr: -1, ml: 0.5 }} />}
                sx={blackOutlinedButtonSx}
              >
                선물하기
              </Button>
            </Grid>
            <Grid item sx={4}>
              <Button sx={blackOutlinedButtonSx}>장바구니</Button>
            </Grid>
            <Grid item sx={4}>
              <Button
                className="hoverBackTextSub"
                sx={blackContainedButtonSx}
                onClick={openPurchaseDialog}
              >
                바로구매
              </Button>
              <Dialog open={isPurchaseDialogOpen} onClose={closePurchaseDialog}>
                <DialogTitle>
                  {isPurchased ? (
                    <span style={{ fontWeight: 900 }}>
                      구매하신 The Freestyle의
                      <br />
                      디지털 제품이 도착하였습니다. <br />
                      미리 체험하시겠습니까?
                    </span>
                  ) : (
                    <span style={{ fontWeight: 900 }}>주문/결제</span>
                  )}
                </DialogTitle>
                <DialogContent>
                  <Grid>
                    <Grid sx={{ mb: 1 }}>
                      <span
                        style={{ fontWeight: 700, color: "var(--textSub)" }}
                      >
                        {isPurchased ? "" : "주문상품"}
                      </span>
                    </Grid>
                    <Grid
                      container
                      sx={{
                        pt: 2,
                        mb: 4,
                        borderTop: "1px solid lightgray",
                        borderBottom: "1px solid lightgray",
                      }}
                    >
                      {isLoading ? (
                        <Grid sx={{ px: 25, py: 5, textAlign: "center" }}>
                          <CircularProgress />
                          <Grid sx={{ textAlign: "center", pt: 1 }}>
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: "18px",
                                color: "var(--samBlue)",
                              }}
                            >
                              처리중입니다.
                            </span>
                            <br />
                            <span style={{ fontSize: "12px" }}>
                              잠시만 기다려주세요.
                            </span>
                          </Grid>
                        </Grid>
                      ) : isPurchased ? (
                        <Grid sx={{ minWidth: "400px", textAlign: "center" }}>
                          <img src={ProductImage} style={{ width: "200px" }} />
                        </Grid>
                      ) : (
                        <>
                          <img src={ProductImage} style={{ width: "200px" }} />
                          <Grid sx={{ p: 2, width: "300px" }}>
                            <Grid>
                              <span
                                style={{ fontWeight: 700, fontSize: "20px" }}
                              >
                                {productName}
                              </span>
                              <br />
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "var(--textSub)",
                                }}
                              >
                                {productModelId}
                              </span>
                            </Grid>
                            <Grid
                              container
                              justifyContent="space-between"
                              sx={{ pt: 2, fontSize: "14px" }}
                            >
                              <span>상품 수</span>
                              <span>1개</span>
                            </Grid>
                            <Grid
                              container
                              justifyContent="space-between"
                              alignItems="center"
                              sx={{ pt: 0.5 }}
                            >
                              <span
                                style={{ fontSize: "14px", fontWeight: 700 }}
                              >
                                결제 예정 금액
                              </span>
                              <Grid>
                                <span
                                  style={{ fontSize: "20px", fontWeight: 700 }}
                                >
                                  {productBenefitPrice}
                                </span>
                                <span
                                  style={{ fontSize: "14px", fontWeight: 700 }}
                                >
                                  원
                                </span>
                              </Grid>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </Grid>

                    <Grid container justifyContent="center" sx={{ mb: 2 }}>
                      {isPurchased ? (
                        <>
                          <Button
                            className="hoverBackTextSub"
                            sx={{ ...blackContainedButtonSx, mr: 2 }}
                            onClick={toExperiencePage}
                          >
                            체험하기
                          </Button>
                          <Button
                            sx={blackOutlinedButtonSx}
                            onClick={closePurchaseDialog}
                          >
                            돌아가기
                          </Button>
                        </>
                      ) : (
                        <Button
                          className="hoverBlueNegative"
                          disabled={isLoading}
                          sx={{
                            px: 5,
                            backgroundColor: isLoading
                              ? "lightGray"
                              : "var(--samBlue)",
                            border: "1px solid var(--samBlue)",
                            borderRadius: "100px",
                            color: "white",
                          }}
                          onClick={onSetPurchseProduct}
                        >
                          <span style={{ fontWeight: 900 }}>
                            {productBenefitPrice}
                          </span>
                          <span>원 결제하기</span>
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 2 }}>
          <span style={{ fontSize: "24px", fontWeight: 900 }}>구매혜택</span>
        </Grid>
        <img src={ProductTip1} style={{ width: "100%" }} />
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 2 }}>
          <span style={{ fontSize: "24px", fontWeight: 900 }}>
            The Freestyle
          </span>
        </Grid>
        <img src={ProductTip2} style={{ width: "100%" }} />
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 10, textAlign: "center" }}>
          <span style={{ fontSize: "32px", fontWeight: 900 }}>
            화면을 알아서 척척 맞춰주는 오토 스크린 세팅
          </span>
          <br />
          <br />
          <span style={{ fontSize: "14px" }}>
            화면 조정하는 시간은 줄이고 화면 속 이야기에 더 집중하세요. The
            Freestyle은 켜기만 해도 몇 초만에 알아서 화면 모서리를 반듯하게
            만들어주죠.
            <br />
            수평은 물론 초점까지 자동으로 맞춰주니까 가로:세로 비율 16:9
            직사각형의 편안한 화면 시청이 가능합니다.
          </span>
        </Grid>
        <video autoPlay loop style={{ width: "100%" }}>
          <source src={ProductTip3} type="video/webm" />
        </video>
      </Grid>
      <Grid sx={{ mt: 5, p: 5 }}>
        <Grid sx={{ mb: 10, textAlign: "center" }}>
          <span style={{ fontSize: "32px", fontWeight: 900 }}>
            손쉬운 각도 조절, 이동까지 편리한 360 디자인
          </span>
          <br />
          <br />
          <span style={{ fontSize: "14px" }}>
            기울기 조절만으로 간편하게 벽에서 천장으로 화면을 옮길 수 있죠.
            <br />
            가벼운 무게, 가방에 쏙 들어가는 원통형 디자인의 콤팩트한 사이즈로
            이동마저 간편합니다.
          </span>
        </Grid>
        <video autoPlay loop style={{ width: "100%" }}>
          <source src={ProductTip4} type="video/webm" />
        </video>
      </Grid>
    </Container>
  );
}

export default Error;
