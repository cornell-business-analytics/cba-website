function main() {
  // POPULATE MEMBER CARDS
  $.getJSON("../assets/json/members.json", function(data) {
    console.log(data)
    var eboard_num = 0
    var pm_num = 0
    var analysts_num = 0
    var alumni_num = 0

    var eboard_col_count = 0
    var pm_col_count = 0
    var analyst_col_count = 0
    var alumni_col_count = 0

    var eboard_card_count = 0
    var pm_card_count = 0
    var analyst_card_count = 0
    var alumni_card_count = 0

    var eboard_append_string = ''
    var pm_append_string = ''
    var analyst_append_string = ''
    var alumni_append_string = ''
    // CALCULATE COUNTS OF ROLES
    $.each(data, function(key,member) {
      if (member.Role == "eboard") {
        eboard_num += 1
      }
      else if (member.Role == "project manager") {
        pm_num += 1
      }
      else if (member.Role == "analyst") {
        analysts_num += 1
      }
      else if (member.Role == "alumni") {
        alumni_num += 1
      }
    })
    console.log(eboard_num)
    console.log(pm_num)
    console.log(analysts_num)
    console.log(alumni_num)

    $.each(data, function(key,member) {
      if (member.Role == "eboard") {
        if (eboard_col_count == 0) {
          eboard_append_string += '<div class="row">'
        }
        eboard_append_string +=
          '<div class="col">' +
          '<img src=' + member.Image + ' alt=' + member.Name + ' data-toggle="modal" data-target="#exampleModal">' +
          '<p>' + member.Name + '</p>' +
          '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered" role="document">' +
              '<div class="modal-content">' +
              '</div>' +
              '<div class="modal-body">' +
                '<p>bruh</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '</div>'
        if (eboard_col_count < 3) {
          eboard_col_count += 1
        }
        eboard_card_count += 1
        if (eboard_col_count == 3 || eboard_card_count == eboard_num) {
          eboard_append_string += '</div>'
          $('#eboard').append(eboard_append_string)
          eboard_append_string = ''
          eboard_col_count = 0
        }
      }

      else if (member.Role == "project manager") {
        if (pm_col_count == 0) {
          pm_append_string += '<div class="row">'
        }
        pm_append_string +=
          '<div class="col">' +
          '<img src=' + member.Image + ' alt=' + member.Name + '>' +
          '<p>' + member.Name + '</p>' +
          '</div>'
        if (pm_col_count < 4) {
          pm_col_count += 1
        }
        pm_card_count += 1
        if (pm_col_count == 4) {
          pm_append_string += '</div>'
          $('#pm').append(pm_append_string)
          pm_append_string = ''
          pm_col_count = 0
        }
        if (pm_card_count == pm_num) {
          for (i=0;i<4-(pm_num%4);i++) {
            pm_append_string += '<div class="col"></div>'
          }
          pm_append_string += '</div>'
          $('#pm').append(pm_append_string)
          pm_append_string = ''
          pm_col_count = 0
        }
      }

      else if (member.Role == "analyst") {
        if (analyst_col_count == 0) {
          analyst_append_string += '<div class="row">'
        }
        analyst_append_string +=
          '<div class="col">' +
          '<img src=' + member.Image + ' alt=' + member.Name + '>' +
          '<p>' + member.Name + '</p>' +
          '</div>'
        if (analyst_col_count < 4) {
          analyst_col_count += 1
        }
        analyst_card_count += 1
        if (analyst_col_count == 4) {
          analyst_append_string += '</div>'
          $('#analysts').append(analyst_append_string)
          analyst_append_string = ''
          analyst_col_count = 0
        }
        if (analyst_card_count == analysts_num) {
          for (i=0;i<4-(analysts_num%4);i++) {
            analyst_append_string += '<div class="col"></div>'
          }
          analyst_append_string += '</div>'
          $('#analysts').append(analyst_append_string)
          analyst_append_string = ''
          analyst_col_count = 0
        }
      }
      else if (member.Role == "alumni") {
        if (alumni_col_count == 0) {
          alumni_append_string += '<div class="row">'
        }
        alumni_append_string +=
          '<div class="col">' +
          '<img src=' + member.Image + ' alt=' + member.Name + '>' +
          '<p>' + member.Name + '</p>' +
          '</div>'
        if (alumni_col_count < 4) {
          alumni_col_count += 1
        }
        alumni_card_count += 1
        if (alumni_col_count == 4) {
          alumni_append_string += '</div>'
          $('#alumni').append(alumni_append_string)
          alumni_append_string = ''
          alumni_col_count = 0
        }
        if (alumni_card_count == alumni_num) {
          for (i=0;i<4-(alumni_num%4);i++) {
            alumni_append_string += '<div class="col"></div>'
          }
          alumni_append_string += '</div>'
          $('#alumni').append(alumni_append_string)
          alumni_append_string = ''
          alumni_col_count = 0
        }
      }
    })
  })
}

$(document).ready(main())
